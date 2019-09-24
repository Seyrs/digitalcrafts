// Have an array of items.
// Create a function with 2 parameters
// First parameter  will be an array to search 
// Second parameter will be avalue to find

// inside the function, use a for loop to go through the array 
// and return true if it finds the second parameter inside the array
// other wise return false


items = ["Cat", "Dog", "Snake", "Ferret", "Big Foot"];
var findItem = "Big Foot";

var search = function(haystack, needle) { 
   for(var i = 0; i< haystack.length; i++) {
	 if(haystack[i] == needle) {
	  return true; 
    } 
	 else false;
 }
	 
var result = search(items, findItem);
	console.log (result);
}