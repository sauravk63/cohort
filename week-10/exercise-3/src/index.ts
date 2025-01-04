import { Client } from "pg";

async function getUser(email : string) {
    const client = new Client({
        host : 'localhost',
        port : 5432,
        user : 'postgres',
        database : 'postgres',
        password : 'mypasswd'
    })

    await client.connect();
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await client.query(query, [email]);

    if(result.rows.length > 0){
        console.log('Users : ' + result.rows[0]);
        return result.rows[0];        
    }else{
        console.log('No users found with given email');
        return null;        
    }
}

getUser('saurav@ghjil.com').catch((err)=>console.error('Message : ', err))