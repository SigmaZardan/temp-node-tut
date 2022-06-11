// learning file system asynchronous method

const { readFile, writeFile, read } = require('fs');
console.log("start");

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    const second = result
    writeFile('./content/result-async', `Here is the result : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log("done with this task");

        console.log(result);
      })
  })
})

console.log("Starting with new task");









