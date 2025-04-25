import db from './connection.js';

//db.all for SELECT statements, we want to get something back
//db.run for INSERT, UPDATE, DELETE, does not return database data such as the inserted row
//db.exec for schematics without parameters, can contain multiple commands

const deleteMode = process.argv.includes("--delete");
if (deleteMode) {
    await db.run(`DROP TABLE IF EXISTS games;`);
    await db.run(`DROP TABLE IF EXISTS runtime_environments;`);
}

//DDL - Data Definition Languge
//Assignment create two tables, one for games and one for types of games.
//SQLite syntax 
await db.exec(
    `
    CREATE TABLE IF NOT EXISTS runtime_environments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        platform TEXT,
        version TEXT
    );

    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description VARCHAR(500),
        price INTEGER,
        genre TEXT CHECK( genre IN ('MMO', 'RPG', 'FPS', 'RACING') ),
        runtime_enviorment_id INTEGER,
    
        FOREIGN KEY (runtime_enviorment_id) REFERENCES runtime_enviorments(id)
    );
    `
);




//DML - Data Manipulation Languge
//seeding

if(deleteMode) {
//dont use backticks to avoid SQL injection attacks, ie. string interpolation
await db.run("INSERT INTO runtime_environments (platform, version) VALUES ('Switch', 'V2');");
await db.run("INSERT INTO games (title, description, price, genre, runtime_enviorment_id) VALUES('Mariocart', 'itilian man driving racing a car', 300, 'RACING', 1);");
}
