
//cat dictionary
var cat = {
    Claws: "sharp",
    Color: "orange",
    Eyes: "green",
    Sound: "meow"
}

//deletes cat sound
delete cat.Sound;

//cat says "undefined"
function myFunction(){
    document.getElementById("Dictionary").innerHTML = "My cat is " + cat.Color + " with " + cat.Eyes + " eyes. "
    + "He says " + cat.Sound;
}