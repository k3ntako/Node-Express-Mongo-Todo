const jwt = require('jsonwebtoken');

let data = {
  id: 527
};

const salt = "somesecret";

let token = jwt.sign(data, salt);
console.log(token);

let decoded = jwt.verify(token, salt);
console.log(decoded);
