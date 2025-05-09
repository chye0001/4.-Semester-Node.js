import db from './connection.js';

async function updateDiscipline(discipline) {
    await db.dissciplines.replaceOne({name: discipline.name}, {$set: {discipline}})
}