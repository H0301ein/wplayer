function toggleFullScreen() {
    let player = document.getElementById("setMov");
    if (!document.fullscreenElement) {
        player.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

export {
    toggleFullScreen,
}