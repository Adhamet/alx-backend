'use stric';
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
