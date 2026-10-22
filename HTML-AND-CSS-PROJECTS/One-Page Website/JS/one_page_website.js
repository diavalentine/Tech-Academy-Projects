
//
const images = document.querySelectorAll(".smallImage");

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        var path = images[i].getAttribute("src");
        console.log(path);
        document.getElementById("enlargedImage").setAttribute("src", path);
        document.getElementById("lightbox").style.display = "flex";
    }
}

document.getElementById("lightbox").onclick = function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
};