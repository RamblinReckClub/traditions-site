var open = false;
var open_sports = false;
var open_trads = false;
var open_camp = false;

function opencloseSideBar() {
    if (open == false) {
        document.getElementById("sidenavelement").style.width = "20%";
        document.getElementById("dimscreen").style.display = "block";
        open = true;
    } else if (open == true) {
        document.getElementById("dimscreen").style.display = "none";
        document.getElementById("sidenavelement").style.width = "0%";
        open = false;
    }
}

function expand_sports() {
    if (open_sports == false) {
        elements = document.getElementsByClassName("hidden_sidebar_sports");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("display", "block", "important");
        }
        open_sports = true;
    } else if (open_sports == true) {
        elements = document.getElementsByClassName("hidden_sidebar_sports");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("display", "none", "important");
        }
        open_sports = false;
    }
}

function expand_traditions() {
    if (open_trads == false) {
        elements = document.getElementsByClassName("hidden_sidebar_trad");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("display", "block", "important");
        }
        open_trads = true;
    } else if (open_trads == true) {
        elements = document.getElementsByClassName("hidden_sidebar_trad");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("display", "none", "important");
        }
        open_trads = false;
    }
}


function expand_campus_life() {
    if (open_camp == false) {
        elements = document.getElementsByClassName("hidden_sidebar_camp");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("display", "block", "important");
        }
        open_camp = true;
    } else if (open_camp == true) {
        elements = document.getElementsByClassName("hidden_sidebar_camp");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.setProperty("display", "none", "important");
        }
        open_camp = false;
    }
}