
function myFunction(sentEnd){
    result = "The rest of this sentence is..."; 
    result += sentEnd; //sentEnd is parameter to be sent argument
    document.getElementById("sentence").innerHTML = result; //innerHTML allows me to change the text of p element
}