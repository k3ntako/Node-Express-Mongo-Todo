const { SHA256 } = require('crypto-js');

let message = "My secret is that I like to sleep with a big brown bear."
let hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

let data = {
  id: 527
};

const salt = "somesecret";

let token = {
  data,
  hash: SHA256(JSON.stringify(data) + salt).toString();
}

//Alter data to simulate an invalid token being returned (uncomment)
// token.data.id = 529
// token.hash = SHA256(JSON.stringify(token.data)).toString()


let resultHash = SHA256(JSON.stringify(token.data) + salt).toString();

if(resultHash === token.hash){
  console.log('Data was not changed');
}else{
  console.log('Data was changed!');
}
