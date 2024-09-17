// TRANSITION DES TITRES DE MENU
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
        });
    });
});

//SLIDER PROJETS
document.addEventListener("DOMContentLoaded", function() {
    let currentSlideIndex = 0;
    const slidesPerView = 3;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const paginationContainer = document.querySelector('.pagination');
    const filterButtons = document.querySelectorAll('.filter');

    let filteredSlides = [];

    function updatePagination() {
        paginationContainer.innerHTML = ''; // Clear existing dots
        const totalSlides = Math.ceil(filteredSlides.length / slidesPerView);
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.slide = i;
            if (i === currentSlideIndex) dot.classList.add('active');
            paginationContainer.appendChild(dot);
        }
        addDotListeners();
    }

    function showSlide(index) {
        const totalSlides = Math.ceil(filteredSlides.length / slidesPerView);
        currentSlideIndex = index;
        const offset = -index * 100; // Move by 100% to show the next set of 3 slides
        document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;

        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelectorAll('.dot')[index].classList.add('active');
    }

    function addDotListeners() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
            });
        });
    }

    function filterSlides(category) {
        // Filtrer les slides selon la catégorie sélectionnée
        filteredSlides = Array.from(document.querySelectorAll(`.slide[data-category="${category}"]`));

        // Hide all slides and only show filtered ones
        document.querySelectorAll('.slide').forEach(slide => slide.style.display = 'none');
        filteredSlides.forEach(slide => slide.style.display = 'block');

        // Reset the slider index and update pagination
        currentSlideIndex = 0;
        updatePagination();
        showSlide(0);
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-filter');
            filterSlides(category);
        });
    });

    prevButton.addEventListener('click', function() {
        const totalSlides = Math.ceil(filteredSlides.length / slidesPerView);
        currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : totalSlides - 1;
        showSlide(currentSlideIndex);
    });

    nextButton.addEventListener('click', function() {
        const totalSlides = Math.ceil(filteredSlides.length / slidesPerView);
        currentSlideIndex = (currentSlideIndex < totalSlides - 1) ? currentSlideIndex + 1 : 0;
        showSlide(currentSlideIndex);
    });

    // Initialize the slider with a default category (webdesign for example)
    filterSlides('web');
});


/*HEADER*/
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const scrollThreshold = 150; // La distance en pixels après laquelle le fond est ajouté

    window.addEventListener("scroll", function() {
        if (window.scrollY > scrollThreshold) {
            header.style.backgroundColor = "rgba(37, 34, 33, 0.85)";
            header.style.transition = "background-color 0.3s ease"; // Transition douce
        } else {
            header.style.backgroundColor = "transparent"; // Remettre le fond à transparent si on remonte
        }
    });
});
