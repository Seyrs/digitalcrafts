

// ********** ATTEMPT 3****************	

var ableToDrive = function(age) {
	if (age > 15) {
	return true;
} else {
	return false;
}

var ableToRentCar = function(age) {
	if (age > 24) {
	return true;
} else {
	return false;
}

var ableToDrink = function(age) {
	if (age > 20) {
	return true;
} else {
	return false;
}

var canPlayInBallPit = function (age) {
	if (age < 11) {
	return true;
} else {
	return false;
}


var answerArray = [];

var ageCheck = function(name, age) {

var sayThis = "";

// for driving requirement

if (ableToDrive(age)) {
	sayThis = name + " is old enough to drive.";
}
 else { sayThis = name + " is not old enough to drive.";
}
	answerArray.push(sayThis);


// for car rental requirement

if (ableToRentCar(age)) {
	sayThis = name + " is old enough to rent a car.";
}
 else { sayThis = name + " is not old enough to rent a car.";
}
	answerArray.push[sayThis];


// for drinking age requirement

if (ableToDrink(age)) {
	sayThis = name + " is old enough to drink.";
}
 else { sayThis = name + " is not old enough to drink.";
}
	answerArray.push[sayThis];


// for ball pit requirement

if (canPlayInBallPit(age)) {
	sayThis = name + " is still at eligible age for ball pit.";
}
 else { sayThis = name + " is too old to play in ball pit.";
} 
	answerArray.push[sayThis];

}


ageCheck("Sarah", 35);
ageCheck("Bob", 21);
ageCheck("Henry", 17);
ageCheck("Katie", 9);

}
	console.log(answerArray);
