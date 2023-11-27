const { sql } = require("../config/pgDB");

const createTables = async () => {
    console.log("CREATING TABLE...");
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await sql`DROP TABLE IF EXISTS users`;
    await sql `
        CREATE TABLE IF NOT EXISTS users(
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        email VARCHAR(50) UNIQUE NOT NULL,
        name VARCHAR(50) NOT NULL,
        password TEXT NOT NULL,
        avatagImg TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    console.log("CREATED TABLE");
};

createTables();