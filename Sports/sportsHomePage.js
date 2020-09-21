var imageIndex = -1;
var open = false;

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

function opencloseSideBar() {
    if (open == false) {
        document.getElementById("sidenavelement").style.width = "12%";
        open = true;
    } else if (open == true) {
        document.getElementById("sidenavelement").style.width = "0%";
        open = false;
    }
}

function openSports() {
    document.getElementById("sidenavsports").style.width = "10%";
    document.getElementById("sidenavsports").style.borderLeft = "3px solid black";
}

function closeSports() {
    document.getElementById("sidenavsports").style.width = "0%";
    document.getElementById("sidenavsports").style.borderLeft = "0px solid black";
}
