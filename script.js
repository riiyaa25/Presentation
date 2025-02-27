window.onload = function() {
    document.getElementById("intro").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("intro").style.transition = "opacity 2s";
        document.getElementById("intro").style.opacity = 1;
    }, 500);
}