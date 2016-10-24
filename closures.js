
var myArray=[1,2,3,4,5,6];

console.log(myArray);


console.log(myArray[0]);

function doSomething(){
  console.log("I'm doing something");
}

console.log(doSomething);

console.log(doSomething());


function firstRankFunction(aStupidValue){
  var aStupidNumber=aStupidValue;
  function secondRankFunction(aParameter){
    console.log("I've been called with a parameter: "+aParameter);
    console.log("...But I also remember my scope: "+aStupidNumber);
  }
  return secondRankFunction;
}

var mysteryFunction=firstRankFunction(10);
// secondRankFunction(aParameter){
//     console.log("I've been called with a parameter: "+aParameter);
//     console.log("...But I also remember my scope: "+aStupidNumber);
// }

mysteryFunction(1);
// I've been called with a parameter: 1
// ...But I also remember my scope: 10
