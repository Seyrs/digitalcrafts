var add = function(num1, num2) {
    return num1 + num2;
}

var subtract = function(num1, num2) {
    return num1 - num2;
}

var calculator = function(a,b,operand) {
    return operand(a,b);
}

var result = calculator(5,10, add);
console.log(result);

var result = calculator(20,10, subtract);
console.log(result);

var result = calculator(3,2, function(num1,num2) {
    return num1 * num2;
});
console.log(result);

var result = calculator(6,2, function(num1,num2) {
    return num1/num2;
});
console.log(result);

//using calculator function, write a function that takes in 2 numbers, multiplies it and finds the remainder
//when divided by 5

var somefunction =  function(num1,num2) {
    return (num1*num2 )%5;   
};
calculator(20, 5, somefunction);
//or
calculator(20,5, function(num1,num2) {
    return(num1* num2) %5;
});

//using calc function, write function that adds 2 numbers together, then find square root
//use the add function inside the function that will find the square root

calculator(6,3, function(num1,num2) {
    var result = add(num1, num2);
    return Math.sqrt(result);
});
//or
calculator(6,3, function(num1,num2) {
    return Math.sqrt(add(num1,num2));
});
console.log(result);