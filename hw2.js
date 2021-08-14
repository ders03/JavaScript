// Ask the user for number, word, print matching phrase
//if number is 0 or >1 add "s"

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
