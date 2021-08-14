//Look for ending and replace it

var endings = {ife:"ives", sh:"shes", ch:"ches", us:"i",
        ay:"ays", oy:"oys", ey:"eys", uy:"uys", y:"ies"};

var prompt = require('prompt-sync')();

function getEnding(num=prompt('Input a number: '), obj=prompt('Input something to pluralize: ')) {
  let result = obj.slice(2, obj.length);
  //return result
  if (result in endings) {
    console.log('true')}
}

function isMember(getEnding) {
  if (getEnding in endings) {
  console.log('true')
  }

};

//getEnding()
isMember(getEnding())
//replace()
