document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
        },
        on: {
            init: function () {
                updateNavigationButtons(this);
            },
            slideChange: function () {
                updateNavigationButtons(this);
            },
        },
    });

    function updateNavigationButtons(swiper) {
        const prevButton = document.querySelector('.custom-swiper-button-prev');
        const nextButton = document.querySelector('.custom-swiper-button-next');

        if (swiper.isBeginning) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }

        if (swiper.isEnd) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }
});