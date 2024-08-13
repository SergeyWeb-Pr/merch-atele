// Подключение свайпера
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);

const hero_swiper = new Swiper('.hero-swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: ".hero-swiper__swiper-button-prev",
        nextEl: ".hero-swiper__swiper-button-next"
    },
    pagination: {
        el: '.hero-swiper__swiper-pagination',
        clickable: true
    },
});
const speciality_swiper = new Swiper('.speciality-swiper', {
    slidesPerView: 8,
    spaceBetween: 22,
    loop: false,
    navigation: {
        prevEl: ".speciality-swiper__swiper-button-prev",
        nextEl: ".speciality-swiper__swiper-button-next",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1201: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        1367: {
            slidesPerView: 8,
            spaceBetween: 22,
        }
    }
});
const works_swiper = new Swiper('.works-swiper', {
    slidesPerView: 4.8,
    spaceBetween: 8,
    loop: false,
    navigation: {
        prevEl: ".works-swiper__swiper-button-prev",
        nextEl: ".works-swiper__swiper-button-next",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.8,
            spaceBetween: 8
        },
        769: {
            slidesPerView: 2.8,
            spaceBetween: 8
        },
        1201: {
            slidesPerView: 3.8,
            spaceBetween: 8
        },
        1367: {
            slidesPerView: 4.8,
            spaceBetween: 8,
        }
    }
});
const reviews_swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 3.2,
    spaceBetween: 24,
    loop: false,
    navigation: {
        prevEl: ".reviews-swiper__swiper-button-prev",
        nextEl: ".reviews-swiper__swiper-button-next",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.4,
            spaceBetween: 12
        },
        769: {
            slidesPerView: 2.4,
            spaceBetween: 20
        },
        1201: {
            slidesPerView: 2.8,
            spaceBetween: 24
        },
        1367: {
            slidesPerView: 3.2,
            spaceBetween: 24,
        }
    }
});
const example_swiper = new Swiper('.example-swiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: false,
    navigation: {
        prevEl: ".example-swiper__swiper-button-prev",
        nextEl: ".example-swiper__swiper-button-next",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 12
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1201: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1367: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});