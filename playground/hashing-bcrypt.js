const bcrypt = require('bcryptjs');

const password = '123abc!';

//10 is the number of rounds
//more takes more time, but more secure
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

const hashedPassword = '$2a$10$7dofQq5iwftxozP0ZFxieu8xYXVBy0p/Hb0kICq/mcTvcY0a06OXq';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})
