import db from './connection.js';

// this function only works if one has added own id field, instead of using the mongodb _id.
async function deleteDisicpline(disciplineId) {
    await db.dissciplines.deleteOne({id: disciplineId});
}