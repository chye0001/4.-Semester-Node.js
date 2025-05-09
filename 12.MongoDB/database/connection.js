import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'martialArts';

await client.connect();

const db = await client.db(dbName);

export default {
    dissciplines: db.collection("disciplines"),
    locations: db.collection("location")
}