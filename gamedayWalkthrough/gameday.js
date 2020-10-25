function updatePage(index) {
    sessionStorage.setItem("shownSlide", index.toString());
    sessionStorage.setItem("shownText", index.toString());
    location.reload();
}

function loadRightPageElements() {
    if (sessionStorage.getItem("shownSlide") == null) {
        sessionStorage.setItem("shownSlide", 1);
    }
    if (sessionStorage.getItem("shownText") == null) {
        sessionStorage.setItem("shownText", 1);
    }
    shownSlideID = "slide" + sessionStorage.getItem("shownSlide");
    shownTextID = "text" + sessionStorage.getItem("shownText");
    if (sessionStorage.getItem("shownSlide") != 1) {
        var shownSlideElement = document.getElementById(shownSlideID);
        var hiddenSlideElement = document.getElementById("slide1");
        var shownTextElement = document.getElementById(shownTextID);
        var hiddenTextElement = document.getElementById("text1");
        hiddenSlideElement.style.display = "none";
        shownSlideElement.style.display = "inline";
        hiddenTextElement.style.display = "none";
        shownTextElement.style.display = "grid";
    } else {
        sessionStorage.setItem("shownSlide", 1);
        sessionStorage.setItem("shownText", 1);
    }
}