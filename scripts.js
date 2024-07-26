document.addEventListener("DOMContentLoaded", function () {
    // Toggle wish text visibility
    var wishButton = document.getElementById("wishButton");
    var wishText = document.getElementById("wishText");

    if (wishButton) {
        wishButton.addEventListener("click", function () {
            if (wishText.style.display === "none" || wishText.style.display === "") {
                wishText.style.display = "block";
            } else {
                wishText.style.display = "none";
            }
        });
    }

    // Fullscreen functionality
    const fullscreenButtons = document.querySelectorAll(".fullscreen-button");

    fullscreenButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const video = this.closest('.reel-item').querySelector('.reels-video');
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { // Safari
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE11
                video.msRequestFullscreen();
            }
        });
    });
});
