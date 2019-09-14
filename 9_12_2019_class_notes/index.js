var ltvFunction = function() {
	var ARPA = 10;
	
	var MM = 15;

	var churn = 5;

	var LTV = (ARPA*MM)/churn;

	return LTV;
}

console.log(ltvFunction());

console.log("Steve thinks the LTV should be " + ltvFunction());

console.log("John thinks the LTV should be " + ltvFunction());



