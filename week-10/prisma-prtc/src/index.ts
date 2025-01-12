import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username : string , firstname : string, lastname : string, password : string){
    const res = await prisma.userTable.create({
        data : {
            email : username,
            firstname,
            lastname,
            password
        },
        select : {
            id : true,
            password : true
        }
        })
    console.log(res);
}

insertUser('saurav2@gmail.com', 'Saurav', 'Sharma', 'pa$$w0r6')