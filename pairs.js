/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
	if (names=[]) {
	  return [];

}else if ([]){
	return [];

}else if (["a"],["b"]){
	return ["a","b"];

}else if (["a","b","c","d"]){
	returns [["a","b"],["c","d"]];

}else if (["a","b","c","d","e"]){
	return [["a","b",],["c","d"],["e"]];

}else if (["a","b","c","d"])
    
}





// let emptyNames = [];
// let evenNames = ["A", "B", "C", "D"];


// pairs(evenNames)

export default pairs;

/**********************************************
* READ ME!!!!
*
* We've including this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}
