//module.exports.items = ['item1', 'item2'];

items = ['item1', 'item2'];

const person = {
  name: 'sanzeena',
  age: '18',
  rollNo: '20480030',
}


//module.exports.singlePerson = person;

//the above module exports both export a object with an array and another object in it


module.exports = { items, person }


// this always exports an object 
