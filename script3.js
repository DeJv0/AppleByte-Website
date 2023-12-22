document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-slideshow-to-najlepsie-main-byphone15-stranka img');
    let index = 0;

    function showImage(n) {
        images.forEach(img => img.classList.remove('active'));
        images[n].classList.add('active');
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }

    // Set an interval to switch to the next image every 3 seconds (adjust as needed)
    setInterval(nextImage, 7000);

    // Show the first image initially
    showImage(index);

    document.getElementById('nextBtn').addEventListener('click', nextImage);
    document.getElementById('prevBtn').addEventListener('click', prevImage);
});