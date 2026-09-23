
//type coercion --> "Ten" + 5 == "Ten5" which is a string
function myFunction(){
    document.write(typeof ("Ten" + 5));
}

//displays positive and negative infinities
function posI(){
    document.write(3E310);
}

function negI(){
    document.write(-3E310);
}

//inspect console with F12
function consoleMath(){
    console.log(10 + 14);
}

function isEqual(){
    document.write(10 == 10);
}

//"===" evaluates value AND data type
function isNotEqual(){
    document.write(10 === "Ten");
}

// AND = &&
function and(){
    document.write(10 != "Ten" && 10 < 5);
}

//OR = ||
function or(){
    document.write(10 != "Ten" || 3 > 6);
}