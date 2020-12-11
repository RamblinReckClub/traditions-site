var imageIndex = -1;
var open = false;
var open_sports = false;
var open_trads = false;
var open_camp = false;

function loopThroughImages() {
    var imageSlides = document.getElementsByClassName("imagemantle")
    var backgroundSlides = document.getElementsByClassName("backimagemantle")
    for (var i=0; i < imageSlides.length; i++) {
        imageSlides[i].style.display = "none";
        backgroundSlides[i].style.display = "none";
    }
    imageIndex++;
    if (imageIndex >= imageSlides.length) {
        imageIndex = 0;
    }
    imageSlides[imageIndex].style.display = "block";
    if (imageIndex >= imageSlides.length - 1) {
        backgroundSlides[0].style.display = "block";
    } else {
        backgroundSlides[imageIndex + 1].style.display = "block";
    }
    setTimeout(loopThroughImages, 5000); //the number is in milliseconds: 1000->1 second
}
