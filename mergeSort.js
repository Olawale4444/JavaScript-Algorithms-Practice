//MergeSort Sorting Algorithm JavaScript Implementation
function mergeSort(arr){
	if (arr.length < 2) return arr ;
middleIndex = Math.floor((arr.length)/2);

//creates a  new array from the first half of the initial array
var firstHalf = arr.slice(0,middleIndex);

//creates a  new array from the second half of the initial array
var secondHalf = arr.slice(middleIndex);

//recursive calls to the "merge" and "mergesort" function, It calls itself so as to further split the array in half
return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2){
  var result = []

  //while both arrays have some values
  while (array1.length && array2.length){
  	var minElement;

  	if (array1[0] < array2[0]) {minElement= array1.shift();
  	}
  	else minElement= array2.shift();
  	result.push(minElement);
  }

  //if array1 still has some elements in it,
  //add it to the result array since it is sorted already
  if (array1.length){
  	result = result.concat(array1)
  }

   //else if array2 still has some values in it,
  //add it to the result array since it is sorted already
  else if (array2.length) {
  	result = result.concat(array2)
  }

//returns the final array
return result;
}

//You can try your hands with the function via the sample values below
//mergeSort([100,-20, 40, -30, 16, -100, -101]);