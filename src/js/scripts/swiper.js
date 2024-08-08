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
});
const speciality_swiper = new Swiper('.speciality-swiper', {
    slidesPerView: 8,
    spaceBetween: 22,
    loop: false,
    navigation: {
        prevEl: ".speciality-swiper__swiper-button-prev",
        nextEl: ".speciality-swiper__swiper-button-next",
    },
});
const works_swiper = new Swiper('.works-swiper', {
    slidesPerView: 4.8,
    spaceBetween: 8,
    loop: false,
    navigation: {
        prevEl: ".works-swiper__swiper-button-prev",
        nextEl: ".works-swiper__swiper-button-next",
    },
    // pagination: {
    //     el: ".speciality-swiper__swiper-pagination",
    //     clickable: true
    // },
});
const reviews_swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 3.2,
    spaceBetween: 24,
    loop: false,
    navigation: {
        prevEl: ".reviews-swiper__swiper-button-prev",
        nextEl: ".reviews-swiper__swiper-button-next",
    },
    // pagination: {
    //     el: ".speciality-swiper__swiper-pagination",
    //     clickable: true
    // },
});