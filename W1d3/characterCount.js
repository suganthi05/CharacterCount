
// var str = "its a great day"


// console.log(string);
var countObject = {};
//var countLetters = function(example)
function countLetters(example) {
 example = example.replace(/\s/g, '').split("");
 for (var i = 0; i < example.length; i++){
   if(countObject[ example[i]]){
     countObject [ example[i]] += 1;
   }else {
     // return 2
     countObject [ example[i]] = 1
   }
 }
}
countLetters("lighthouse in the house");
console.log(countObject);
