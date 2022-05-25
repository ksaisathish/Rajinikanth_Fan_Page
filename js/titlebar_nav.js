var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var TitleBar = document.getElementById("TitleBar");
    var Contents = document.getElementById("Contents");

    if (prevScrollpos > currentScrollPos && (prevScrollpos - currentScrollPos) < 5) {
        TitleBar.style.top = "0";
        if (typeof (Contents) != 'undefined' && Contents != null) {
            Contents.style.height = "auto";
        }
    }
    else if (currentScrollPos < 80) {
        TitleBar.style.top = "0";
        if (typeof (Contents) != 'undefined' && Contents != null) {
            Contents.style.height = "auto";
        }
    }
    else {
        TitleBar.style.top = "-200px";
        if (typeof (Contents) != 'undefined' && Contents != null) {
            Contents.style.height = "0px";
        }
    }
    prevScrollpos = currentScrollPos;
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


function openNav() {
    document.getElementById("Sidepanel").style.width = "20%";
    document.getElementById("openbtn").style.opacity = "0";
    document.getElementById("Contentbtn").style.opacity = "0";
}

function closeNav() {
    document.getElementById("Sidepanel").style.width = "0";
    document.getElementById("openbtn").style.opacity = "1";
    document.getElementById("Contentbtn").style.opacity = "1";
}