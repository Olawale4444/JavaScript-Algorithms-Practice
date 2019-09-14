function fizzBuzz(num){
// The function titled "fizzBuzz" takes in an integer variable, and returns 
// either "Fizz " or "Buzz" for every number thats divisble by 3 or 5 respectively up to
// the length of the number

for(var i=1; i<=num; i++){
	//Iterating through the loop, up till the number

	   if (i % 3===0 && i%5 === 0) console.log("fizzBuzz")
	   	// Returns FizzBuzz when the number leading up to the input number is divisible by 3 and 5 
	   // simultaneously
	  

	  else if (i %3===0) console.log ("Fizz");  
	  // Returns "Fizz" when the number leading up to the input number is divisible by 3


	  else if (i % 5===0) console.log("Buzz");
	  // Returns "Buzz" when the number leading up to the input number is divisible by 3
	  

	  else console.log(i);
	  //returns the number leading up to the input number

	}

}