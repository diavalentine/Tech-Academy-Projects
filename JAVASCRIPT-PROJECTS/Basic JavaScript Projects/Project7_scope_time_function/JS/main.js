//function checks time and converts to 12 hr clock
time = 0; //placeholder value for global variable

function myFunction(){
    var now = new Date(); //local variable
    time = now.getHours();
    var AmPm = "";
    if (time > 12) {
        time -= 12;
        AmPm = " p.m.";
    } else if (time <= 12) {
        AmPm = " a.m.";
    } else {
        console.log("This must be an error...")
    }
    document.getElementById("click").innerHTML = "The time is " + time + AmPm; //edits p element
}