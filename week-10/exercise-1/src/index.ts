import { Client } from "pg";

const client = new Client({
    connectionString:'postgresql://postgres:mypasswd@localhost/postgres'
})


async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users( 
        id serial primary key,
        username VARCHAR(70) UNIQUE NOT NULL,
        email VARCHAR(270) UNIQUE NOT NULL,
        password VARCHAR(70) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `)

        console.log(result);
}

createUsersTable();