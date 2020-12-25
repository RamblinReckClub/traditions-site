var imageIndex = 0;

function clickLeft() {
    var sportsCoaches = document.getElementsByClassName("gridContainer");
    var oldImageIndex = imageIndex;
    imageIndex = imageIndex - 1;
    if (imageIndex < 0) {
        imageIndex = sportsCoaches.length - 1;
    }
    sportsCoaches[oldImageIndex].style.display = "none";
    sportsCoaches[imageIndex].style.display = "grid";
}

function clickRight() {
    var sportsCoaches = document.getElementsByClassName("gridContainer");
    var oldImageIndex = imageIndex;
    imageIndex = imageIndex + 1;
    if (imageIndex > sportsCoaches.length - 1) {
        imageIndex = 0;
    }
    sportsCoaches[oldImageIndex].style.display = "none";
    sportsCoaches[imageIndex].style.display = "grid";
}