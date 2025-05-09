import db from './connection.js';

const data = await db.dissciplines.find().toArray();
console.log(data);
