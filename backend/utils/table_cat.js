const { sql } = require("../config/pgDB");

const createCatTable = async () => {
    console.log("CREATING TABLE...");
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await sql `
        CREATE TABLE IF NOT EXISTS catagories(
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(50) NOT NULL,
        description TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_img TEXT,
        category_color TEXT
    )`;
    console.log("CREATED TABLE");
};

createCatTable();