var openSideBar = false;

window.addEventListener('load', function () {
    console.log("test");
    var vid = document.getElementById("openVideo");
    vid.play();  
})

function startpauseVideo() {
    var vid = document.getElementById("openVideo");
    if (openSideBar == false) {
        vid.pause();
        openSideBar = true;
    } else if (openSideBar == true) {
        vid.play();
        openSideBar = false;
    }
}