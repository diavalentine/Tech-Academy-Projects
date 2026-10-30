function getMsg() {
    //step 1: setup the XMLHttpRequest object

    let ajaxRequest = new XMLHttpRequest();
    
    //get input value of name to display to user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;

    //function to display user input value once request
    //has been received
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you " + 
        inputVal + " for signing up!";
    }

    //step 2: prepare the type of request and what to
    //request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //step 3: defines the AJAX response callback method that
    //establishes whether the response was successful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML =
            ajaxRequest.responseText;
        }
    }

    //step 4: send the request 
    ajaxRequest.send();
}

function loadContent() {
    //creates new ajax request
    var xhttp = new XMLHttpRequest();
    //what happens when response arrives
    xhttp.onload = function () {
        if (xhttp.status = 200){
            document.getElementById("content2").innerHTML = 
            xhttp.responseText;
        };
    }
    xhttp.open("GET", "content.html", true);
    xhttp.send();
}