
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showCarouselItem(currentIndex);
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.classList.add('carousel-button');
    carouselContainer.appendChild(nextButton);

    const prevButton = document.createElement('button');
    prevButton.innerText = 'Prev';
    prevButton.classList.add('carousel-button');
    carouselContainer.appendChild(prevButton);

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(currentIndex);
    });
});
