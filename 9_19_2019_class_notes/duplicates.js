// In this exercise, we are going to find an array that has duplicate values
// we will have a first loop that goes through all the items in the array
// we will have a second loop that checks all the items against the index of the first loop

// when a duplicate is found, print duplicate

var items = ["cat", "dog", "ferret", "Alien", "dog", "bird", "ferret"];

for( var k = 0; k < items.length; k++) {
	for( var p = 0; p < items.length; p++) {
	   if(k != p && items[k] == items[p]) {
		 console.log(items[p]); 
		 }
	}
}
