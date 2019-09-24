
//person is object
var person = {
    first_name : "John",
    last_name : "Doe",
    middle_name: "Harry",
    age: 40,
    likes : ["sushi", "jet skiing", "beer"]
};
    //way 1 to print
console.log(person.first_name);
    //way2
console.log(person["first_name"]);
console.log(person["last_name"]);
console.log(person["middle_name"]);
console.log(person.age);
console.log(person.likes);