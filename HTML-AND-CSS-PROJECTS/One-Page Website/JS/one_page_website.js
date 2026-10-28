
//
const images = document.querySelectorAll(".smallImage");
let currentIndex = 0;

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        currentIndex = i;
        showImage();
        document.getElementById("lightbox").style.display = "flex";
    }
}

document.getElementById("lightbox").onclick = function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
};

document.getElementById("leftArrow").onclick = function () {
     currentIndex--;
     if (currentIndex < 0) {
        currentIndex = images.length - 1;
     }
     showImage();
}

document.getElementById("rightArrow").onclick = function () {
     currentIndex++;
     if (currentIndex > images.length - 1) {
        currentIndex = 0;
     }
     showImage();
}

function showImage() {
    var path = images[currentIndex].getAttribute("src");
    document.getElementById("enlargedImage").setAttribute("src", path);
}