var imageIndex = -1;

function loopThroughImages() {
    var imageSlides = document.getElementsByClassName("imagemantle")
    for (var i=0; i < imageSlides.length; i++) {
        imageSlides[i].style.display = "none";
    }
    imageIndex++;
    if (imageIndex >= imageSlides.length) {
        imageIndex = 0;
    }
    imageSlides[imageIndex].style.display = "block";
    setTimeout(loopThroughImages, 5000); //the number is in milliseconds: 1000->1 second
}