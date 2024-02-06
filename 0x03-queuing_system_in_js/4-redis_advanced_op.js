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

const name = 'HolbertonSchools';
const values = {'Portland': 50,
                'Seattle': 80,
                'New York': 20,
                'Bogota': 20,
                'Cali': 40,
                'Paris': 2}

for (const [key, val] of Object.entries(values)) {
    client.hset(name, key, val, (error, reply) =>
        redis.print((`Reply: ${reply}`))
    );
}

client.hgetall(name, (error, object) => console.log(object));
