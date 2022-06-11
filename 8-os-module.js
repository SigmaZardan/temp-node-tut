//os modules
const os = require('os');


// info about the current user

const user = os.userInfo();
console.log(user);

//method returns the system uptimes in seconds

console.log(os.uptime());

const currentOS = {

  name: os.type(),
  release: os.release(),
  totalMeme: os.totalmem(),
  freeMem: os.freemem()

}

console.log(currentOS);







