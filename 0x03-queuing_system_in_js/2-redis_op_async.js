import redis from 'redis';
import { get } from 'request';
import { promisify } from 'util';

const client = redis.createClient()
const get_client = promisify(client.get).bind(client)(schoolName)

// Log message when Redis connects successfully
client.on('connect', () => {
    console.log('Redis client connected to the server');
});

// Log error when Redis client encounters an error
// connecting to a server
client.on('error', (error) => {
    console.error(`Redis client not connected to the server: ${error}`);
});


function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (error, reply) => {
        redis.print(`Reply: ${reply}`);
    });
}

const displaySchoolValue = async (schoolName) => {
    const reply = await get_client(schoolName);
    console.log(reply);
}

(async() => {
    await displaySchoolValue('Holberton');
    setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
})();
