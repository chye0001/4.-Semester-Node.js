import db from './connection.js';

async function createDisipline(name) {
    await db.dissciplines.insertOne({name})
} 