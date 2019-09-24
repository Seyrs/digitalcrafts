/*Vending Machine Group Exercise*

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices:
- Snickers  $1.25
- Popcorn   $1.00
- Chewing Gum $0.25
- Nuts $0.50
- Cookies $1.70
- Cup Noodles $2.25

The vending machine can accept the following currency:
- Nickel $0.05
- Dime $0.10
- Quarter $.25
- Dollar $1.00

When a person is buying from the vending machine, the following happen:
- A list of items is shown to them with the prices
- They insert money into the machine based on the allowed currency above
- They then select their item and the following can happen:
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions

With a partner, please discuss the problem by laying each piece of the problem 1 step at a time, and work your way through the problem.
*/

/*1. You will be running this against 5 different people that enter different amounts and want different items. Your code MUST be re-usable.

2. The amount tendered should be stored. This is important because the amount tendered is going to:
     - Going to be compared against the cost of the item to determine if the item can be purchased
     - Going return the different between the amount tendered vs cost of the item
     -  Reset for each new person

3. Take everything ONE STEP AT A TIME.
*/

/*
var vendingMachine = [
        { snack: "snickers", price: 1.25},
        { snack: "popcorn", price: 1.00},
        { snack: "chewing gum", price: 0.25},
        { snack: "nuts" , price: 0.50},
        { snack: "cookies", price: 1.70},
        { snack: "cup noodles", price: 2.25}
                    ]

var currency = [
        {type: "nickel", value: 0.05},
        {type: "dime" , value: 0.10},
        {type: "quarter" , value: 0.25},
        {type: "dollar" , value: 1.00}
               ]


//listing available snacks             
var inMachine = [];
    var show = function(items) {
            for (var i =0; i< items.length; i++) {
                var list = items[i];
                inMachine.push(list.snack + " " + list.price) 
            }
                    return inMachine
            }    
var listResults = show(vendingMachine)
    console.log(listResults)

//entering money in vending machine
var total= [];
var moneyTotal = function(money) {
    for (var i = 0; i<currency.length; i++) {
        if(currency[i].type == money) {
         total += currency[i].value }
    }
return total            
    }
var amount = moneyTotal ( "nickel")
    console.log(amount);

// trying to buy a snack

/* attempt 3
var purchase = [];
var findSnack = "snickers";

for(var i =0; i< items; i++); {
    for(var j =20; amount >0, j++;) {
        if j != i; {
            return false; 
        } else return true
}       
var result = search(listResults, findItem);
    console.log (result
            if(purchase.push(findSnack)+ this.vendingMachine.type + amount%))
*/   

/*
items = [];
var findSnack = "snickers";

var search = function(haystack, needle) { 
   for(var i = 0; i< haystack.length; i++) {
	 if(haystack[i] == needle) {
	  return true; 
    } 
	 else false;
 }
	 
var result = search(items.push[listResults], findSnack);
	console.log (result);


var resultArray = [];


var price = vendingMachine.price;
var math = amount-vendingMachine.price;


        var testVend = function(name, money, snack) {
                 if(amount == price) {
        return ( "snack" + math)
                } else if(amount > price) { 
         return (snack + " is your change.")
                } else if(amount < price)
        return ("You need more money");
}   
testVend("john", 3.00, "snickers");
testVend("may", 1.50, "popcorn");
testVend("sue", 0.75, "snickers");
testVend("adam", 2.00, "nuts")

console.log(resultArray);
}
*/
// gerald's below

var vendingMachine = [
    {snack: "Snickers", price: 1.25},
    {snack: "Popcorn", price: 1.00},
    {snack: "Chewing Gum", price: 0.25},
    {snack: "Nuts", price: 0.50},
    {snack: "Cookies", price: 1.70},
    {snack: "Cup Noodles", price: 2.25}
   ];
   var inMachine = []
   var show = function(items) {
        for(var i=0; i<items.length; i++) {
            var list = items[i];
            inMachine.push(list.snack + " " + list.price)
        }
        return inMachine;
   }
   var listResults = show(vendingMachine)
   console.log(listResults)
   var insertedMoney = 0;
   var totalMoney = function(item) {
         for(var i = 0; i<item.length; i++) {
                 if (item[i] == "nickel") {
                   insertedMoney += 0.05
                 } else if (item[i] == "dime") {
                   insertedMoney += 0.10
                 } else if (item[i] == "quarter") {
                   insertedMoney += 0.25
                 } else if (item[i] == "dollar") {
                   insertedMoney += 1.00
                 }
             }
        return insertedMoney;
         }
   var getSnack = function(choice, total) {
   var vend = []
     for(var i=0; i<vendingMachine.length; i++) {
         if(choice == vendingMachine[i].snack && insertedMoney == vendingMachine[i].price) {
             vend.push(choice + " is dispensed") && (insertedMoney-=insertedMoney);
             } else if (choice == vendingMachine[i].snack && insertedMoney > vendingMachine[i].price) {
                 vend.push(choice + " is dispensed." + " And your change is: " + (insertedMoney -= vendingMachine[i].price)) && (insertedMoney-=insertedMoney);
                   } else if (choice == vendingMachine[i].snack && insertedMoney < vendingMachine[i].price) {
                       vend.push(choice + " is not dispensed." + " Add additional funds: " + (vendingMachine[i].price -= insertedMoney)) && (insertedMoney-=insertedMoney);
                       }
           }
    return vend
     }
   var geraldinsert = ["dollar", "quarter", "dollar", "dime"];
        var geraldTotal = totalMoney(geraldinsert);
        console.log(geraldTotal)
              var vendSelection = getSnack("Snickers", geraldTotal);
              console.log(vendSelection);
   var seyinsert = ["dollar"];
        var seyTotal = totalMoney(seyinsert);
        console.log(seyTotal);
              var vendSelection = getSnack("Popcorn", seyTotal);
              console.log(vendSelection);
   var johninsert = ["dollar", "dollar", "dime"];
        var johnTotal = totalMoney(johninsert);
        console.log(johnTotal);
              var vendSelection = getSnack("Cup Noodles", johnTotal);
              console.log(vendSelection);
   var carolinsert = ["dollar", "dime", "dime", "nickel"];
        var carolTotal = totalMoney(carolinsert);
        console.log(carolTotal);
              var vendSelection = getSnack("Nuts", carolTotal);
              console.log(vendSelection);
   var steveinsert = ["dollar", "quarter"];
        var steveTotal = totalMoney(steveinsert);
        console.log(steveTotal);
              var vendSelection = getSnack("Cookies", steveTotal);
              console.log(vendSelection);
   
   
   
   
   
   
   


