// for loop that iterates over 20 numbers (1 - 20)

// if the number at the current i is divisible by both 2 and 3, console.log("fizzbuzz")
// if the number at the current i is only divisible by 2, console.log("Fizz")
// if the number at the current i is only divisible by 3, console.log("buzz")

// for division  (if divisible) its if(number % other_number)

// below == 0 because the remainder will equal 0 making it true for no remainder.

for(var i=1; i< 20; i++) {

    if( i % 2==0 && i % 3==0){
       console.log(i + " Fizzbuzz")

    } else if (i % 2 == 0 ) {     
       console.log(i + " Fizz")

    } else if (i % 3 == 0) {
       console.log(i + " buzz");
    }
}
