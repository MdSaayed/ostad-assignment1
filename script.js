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

    // navigation swiper
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

// menu

document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.getElementById("menuIcon");
    var closeMenuButton = document.querySelector(".close-menu");
    var dropdownMenu = document.getElementById("dropdownMenu");

    // Function to disable body scrolling
    function disableBodyScroll() {
        document.body.style.overflow = "hidden";
    }

    // Function to enable body scrolling
    function enableBodyScroll() {
        document.body.style.overflow = "";
    }

    // Toggle dropdown menu visibility when menu icon is clicked
    menuIcon.addEventListener("click", function () {
        dropdownMenu.classList.toggle("hidden");
        if (!dropdownMenu.classList.contains("hidden")) {
            dropdownMenu.classList.add("animate-fadeInScale");
            disableBodyScroll();
        } else {
            dropdownMenu.classList.remove("animate-fadeInScale");
            enableBodyScroll();
        }
    });

    // Close dropdown menu when close-menu button is clicked
    closeMenuButton.addEventListener("click", function () {
        dropdownMenu.classList.add("hidden");
        dropdownMenu.classList.remove("animate-fadeInScale");
        enableBodyScroll();
    });
});



// FAQs
function toggleAnswer(id, icon) {
    const answer = document.getElementById(id);
    if (answer.classList.contains('max-h-0')) {
        // Expand the answer
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.classList.remove('max-h-0');
    } else {
        // Collapse the answer
        answer.style.maxHeight = '0';
        answer.classList.add('max-h-0');
    }

    // Toggle icon rotation and icon type
    icon.classList.toggle('rotate-90');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-times');
}










