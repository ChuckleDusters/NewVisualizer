function initPage() {
    document.body.classList.remove('preload');
}

function openFullscreen() {
    var elem = document.getElementById("canvasContainer");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }
}

//document.getElementById('canvasContainer').addEventListener("click", openFullscreen)