const images = document.querySelectorAll('.zooming-image img');

function handleScroll() {
    images.forEach(image => {
        const imageRect = image.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;

        if (imageRect.top < windowHeight && imageRect.bottom > 0) {
            const scrollPercent = (windowHeight - imageRect.top) / (windowHeight + imageRect.height);
            const scale = 1 + scrollPercent * 0.5; // Adjust the scaling factor as needed

            requestAnimationFrame(() => {
                image.style.transition = 'transform 0.2s ease-in-out'; // Adjust the transition duration as needed
                image.style.transform = `scale(${scale})`;
            });
        }
    });
}

window.addEventListener('scroll', handleScroll);
