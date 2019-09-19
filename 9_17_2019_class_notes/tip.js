



/*
****** serverAct = ["greet", "breadWater", "refill", "foodOkay", "prompt"];
var actOne = serverAct[0];
var actTwo = serverAct[1];
var actThree = serverAct[2];
var actFour = serverAct[3];
var actFive = serverAct[4];
************************************************* ignore above
*/
	


// variable for sum of activities

// variables for server activities


var greet = "yes";
var breadWater = "yes";
var refill = "yes";
var foodOkay = "yes"
var prompt = "no";


var totalPoints = 0;


if(greet = "yes"){
	return totalPoints++; }
if(breadWater = "yes") {
	return totalPoints++; }
if(refill = "yes") {
	return totalPoints++; }
if(foodOkay = "yes") {
	return totalPoints++; }
if(prompt = "yes") {
	return totalPoints++; }

   console.log(totalPoints);

// **************************STep 2****************
// conditions for amount of points


var bill = 50.00;
var tip = 0;

var tipPercent = function(bill, totalPoints) {
	return bill * tip

  	if (totalPoints ==0) {
		return "1% tip" + .01 * bill; 
  } else if (totalPoints ==1) {
		return "2% tip" + .02 * bill; 
  } else if (totalPoints ==2) {
		return "4% tip" +  .04 * bill; 
  } else if (totalPoints ==3);
		return "7% tip" + .07 * bill; 
  } else if (totalPoints ==4);
		return "5% tip" + .05 * bill; 
  } else if (totalPoints ==5);
		return "15% tip" + .15 * bill;
 
}
	console.log(tipPercent + " percent of tip");	



