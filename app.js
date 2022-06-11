//npm -global command,come with node

//npm --version

//local dependency - use it only in this particular project

//npm i <packageName>

//global dependency - use it in any project

//npm install -g <packageName>
// sudo npm install -g <packageName> this ones on mac


//package.json -manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)



const _ = require('lodash');  //here is the use of the package loadash 


const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
