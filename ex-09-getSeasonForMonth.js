/**
 * getSeasonForMonth()
 * ------------------------------------------------------
 * Write a function called getSeasonForMonth() that accepts
 * an integer as an argument and returns the season of year.
 *   e.g. getSeasonForMonth(6) => 'summer'
 *
 * The function should be built to ONLY accept integer values
 * of 1-12.
 *
 * It the user should also return a boolean value of `false``
 * if the function is given a number less than 1, greater than 12,
 * or a non-number data type.
 *
 **/

function getSeasonForMonth(month){
	if(Number.isInteger(month)){
		if(month >= 1 && month <= 12){
			switch(month){
				case 12:
				case 1:
				case 2:
					return "winter";
				break;
				case 3:
				case 4:
				case 5:
					return "spring";
				break;
				case 6:
				case 7:
				case 8:
					return "summer";
				break;
				case 9:
				case 10:
				case 11:
					return "fall";
				break;
				default: break;
			}
		}else{
			return false;
		}
	}else{
		return false;
	}
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( getSeasonForMonth(1) === "winter")
console.assert( getSeasonForMonth(3) === "spring")
console.assert( getSeasonForMonth(5) === "spring")
console.assert( getSeasonForMonth(7) === "summer")
console.assert( getSeasonForMonth(9) === "fall")
console.assert( getSeasonForMonth(12) === "winter")

console.assert( getSeasonForMonth(13) === false)
console.assert( getSeasonForMonth(32) === false)
console.assert( getSeasonForMonth(0) === false)
console.assert( getSeasonForMonth() === false)
console.assert( getSeasonForMonth("June") === false)
