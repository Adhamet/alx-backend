'use strict';
import redis from 'redis';
const client = redis.createClient()

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

function displaySchoolValue(schoolName) {
    client.get(schoolName, (error, reply) => {
        console.log(reply);
    })
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
