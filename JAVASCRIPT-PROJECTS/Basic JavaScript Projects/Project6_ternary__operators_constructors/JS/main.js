//function evaluates if rider is tall enough to ride using ternary operator
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("height").value
    Can_ride = (Height < 52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

//contructor function for Person objects
function Person(name, age){
    this.name = name;
    this.age = age;
}

//function displays results of the constructor function within a p element
function makePerson(){
    firstName = document.getElementById("name").value
    age = document.getElementById("age").value
    bob = new Person(firstName, age);
    document.getElementById("person").innerHTML = "You are " + bob.name + ", age " + bob.age + ".";

    function nestedFunc(){ //this is a nested function
        console.log("I am a nested function. After a person instance is made, I produce this message");
    }

    nestedFunc(); //calls the nested function
    
}