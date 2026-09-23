
var A = "hello";
var B = " my name is ";
var C = "Bob";
var D = ". Nice to meet you."

var sentence = A.concat(B, C, D); //concat function to concatenate variables

//this function changes p element to sentence
function concatenate(){
    document.getElementById("concat").innerHTML = sentence;
}

//this function slices sentence to get Bob's name and changes the p element to a response
function sliceReply(){
    var response = "hi there, " + sentence.slice(17,20);
    document.getElementById("reply").innerHTML = response;
}

//this function displays the number 42 as a string
function numToString(){
    var num = 42;
    document.getElementById("numToString").innerHTML = num.toString();
}

//this function formats 123456.789 to 6 digits
function formatPrecise(){
    var num = 123456.789;
    document.getElementById("precision").innerHTML = num.toPrecision(6);
}