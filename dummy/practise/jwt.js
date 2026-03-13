const jwt = require('jsonwebtoken');

const value={
    name : 'fgfgfjkffbf',
    pints : [1,5,2,34,5,7,8]
}

const token = jwt.sign(value, "secretTOKEN");

console.log(token);
