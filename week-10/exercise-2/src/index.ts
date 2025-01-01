import { Client } from "pg";

const client = new Client({
    connectionString:'postgresql://postgres:mypasswd@localhost/postgres'
})

async function inserDataInTable() {
    await client.connect();
    const result = await client.query(`
        INSERT INTO users(username, email, password)
        VALUES('Saurav Sharma','saurav@mail.com', 'FTSASF&*&');
        `)

    console.log(result);
    
}

inserDataInTable();