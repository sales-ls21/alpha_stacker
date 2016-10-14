var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function stackLetters (theAlphabetArray) {
	var currLtr=" ";
	var space = " ";
	for (var i = 0; i < theAlphabetArray.length; i++)	{
		if (i % 3 === 0) {
			currLtr = currLtr + " ";
		}
		space = theAlphabetArray[i];
		currLtr = currLtr + space;

		console.log(currLtr);
		// console.log(currLtr);	
		}
	}

stackLetters(alphabet);

