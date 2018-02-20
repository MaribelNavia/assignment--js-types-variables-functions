/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/
function isVowel(vowel) {
	let vowels=["a","e","i","o","u","y","A","E","I","O","U"];
	return vowels.indexOf(vowel) >= 0;

}





 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
