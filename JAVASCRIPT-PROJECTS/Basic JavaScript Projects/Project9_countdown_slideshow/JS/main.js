//countdown function has tick function nested inside
function countdown(){
    var seconds = document.getElementById("seconds").value; //gets seconds value from input

    function tick(){
        seconds -= 1; //decrement seconds by 1
        document.getElementById("timer").innerHTML = seconds; //display seconds remaining on timer
        var time = setTimeout(tick, 1000); //pause for 1 second
        if (seconds == -1) { //checking if time is up
            alert("Time's up!");
            clearTimeout(time); //resets timer
            document.getElementById("timer").innerHTML = "";
        }
    }
    tick(); //calls tick() function
}

//slideshow section
var slideIndex = 0; //global var slideIndex assigned starting value of 0

showSlide(); //calls showSlide() function

function changeSlide(n) { //called when arrows are pressed, passed an argument of 1 or -1 depending on direction
    slideIndex += n;
    showSlide();
}

function showSlide() {
    var slides = document.getElementsByClassName("slide"); //list of all elements w/ slide class

    if (slideIndex >= slides.length) { //resets to first image if user clicks past last image
        slideIndex = 0;
    }

    if (slideIndex < 0) { //resets to last image if user clicks backwards before the first image
        slideIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) { //for loop to go through each slide and hide them all
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block"; //reveals correct slide
}