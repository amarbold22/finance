const { sql } = require("../config/pgDB");

const createTransTable = async () => {
    await sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql `
        CREATE TABLE IF NOT EXISTS transaction(
        id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
        user_id UUID REFERENCES users(id),
        name TEXT NOT NULL,
        amount REAL NOT NULL,
        transaction_type type,  
        description TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id UUID REFERENCES catagories(id)
    )`;
};

createTransTable();