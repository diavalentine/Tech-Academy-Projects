
//while loop function
function Call_While_Loop(){
    var X = 0;
    while(X < 10){
        document.write("Count = " + X);
        X++;
    }
}

//for loop/array function
function Call_For_Loop(){
    var zoo = ["hippo", "zebra", "lion", "snake"];
    for (i = 0; i < 4; i++){
        document.write(" hi " + zoo[i]);
    }
}

let Steve = { //javascript object with let declaration
    hair: "brown",
    talent: "accounting",
    school: "ASU"
}