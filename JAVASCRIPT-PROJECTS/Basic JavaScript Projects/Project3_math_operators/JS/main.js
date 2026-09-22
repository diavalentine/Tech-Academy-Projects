

//adding function
function add(num1, num2){
    result = num1 + num2;
    document.getElementById("add").innerHTML = "The sum of these two numbers is " + result;
}

//subtracting function
function subtract(num1, num2){
    result = num1 - num2;
    document.getElementById("subtract").innerHTML = "Subtracting the second number from the first gives you " + result;
}

//multiply function
function multiply(num1, num2){
    result = num1 * num2;
    document.getElementById("multiply").innerHTML = "The product of these two numbers is " + result;
}

//modulus function
function mod(num1, num2){
    result = num1 % num2;
    document.getElementById("mod").innerHTML = "The remainder of these two numbers is " + result;
}

//increment function
function inc(num1){
    result = ++num1;
    document.getElementById("inc").innerHTML = "The number plus one is " + result;
}

//decrement function
function dec(num1){
    result = --num1;
    document.getElementById("dec").innerHTML = "The number minus one is " + result;
}

//random number function
function rand(){
    result = Math.random() * 100;
    result = Math.floor(result);
    document.getElementById("rand").innerHTML = "The random number is " + result;
}

