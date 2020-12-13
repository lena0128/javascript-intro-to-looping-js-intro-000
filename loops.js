function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loops.`);
}
 return array;
}


var myArray = [];
forLoop(myArray);
console.log(myArray);
