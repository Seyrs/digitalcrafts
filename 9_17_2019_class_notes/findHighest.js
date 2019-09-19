

var numbers = [3, 8, 12, 1, 6, 15, 3];
// (line below) i=0 is the starting point; i<numbers.lengh is the condition, the length of numbers in the array. i++ is adding one to each number in the loop

for(var i=0; i<numbers.length; i++) {
	console.log(numbers[i]);
}

// i = 0 means i is the first number in the array, ih this case it is 3


**************************************************
// add all the values in the array and print to the screen

	var final = 0
	for(var i=0; i<numbers.length; i++) {

	final += numbers[i];
	// finding the sum of all numbers, adding the final plus the next number.
}	
	console.log(final);


*****************************************************

// assignment 3, using the for loop and If statements inside the for loop 
// find the largest number in the array

var largestNumber = numbers[0];

	for(var i =0; i<numbers.length; i++) {

	if(numbers [i]  > largestNumber ) {
		largestNumber = numbers[i];
}
}	
	console.log(largestNumber);






***************************************************



// assignment 4, step1 create a for loop that creates an array of 100 random numbers
// math.random**
// step 2 from the random number array, find the smallest number

var numArray = [];


	for( var j=0; j <=100; j++);

	numArray.push(Math.random());
		console.log (numArray);

step 2*******************************************
var small = numArray[0];

for(var j = 0; j> small.length; j++)
{

	if( numArray[j] < small) 
{
	small = numArray[j];
}
}
	console.log(small);
