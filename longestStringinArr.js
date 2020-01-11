function longestStr(arr){
    
//takes in the first two words in the array, compares and switches them,
//then continues through the array in the same fashion

    return arr.reduce((firstWord, nextWord)=> {
        console.log("firstWord is ", firstWord) 
        console.log("nextWord is", nextWord)
        return firstWord.length >nextWord.length ? firstWord:nextWord;
    });
}
//if the longest words are of equal length, it returns the longest last item in the array 

//test cases
longestStr(['ola', 'wiley', 'Jamie', 'Santa', 'Scott', ''])



//Second Solution

function longestStringInArr(arr){
	var longestValue = 0;
	var longestString = "";
	//loops through the array length
	for (let i = 0; i < arr.length ; i++){

		if (arr[i].length > longestValue){
			arr[i].length = longestValue;
			 longestString = arr[i];
		}
	}
	return longestString;
}
longestStr(['ola', 'Hola', 'Ed', "Wiley", 'ddouble', 'presidentT'])
