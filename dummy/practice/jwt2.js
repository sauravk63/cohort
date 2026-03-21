const jwt = require('jsonwebtoken')


const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmdmZ2Zqa2ZmYmYiLCJwaW50cyI6WzEsNSwyLDM0LDUsNyw4XSwiaWF0IjoxNzczNDMxNDM1fQ.7MKAkZuhEgdVoxYKxgmX17vzyi7XjOszQGbbIu-a1MY"


const actualText = jwt.verify(token, "secretTOKhEN");

console.log(actualText);
