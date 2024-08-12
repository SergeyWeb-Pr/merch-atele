function hoverLink() {
    const links = $('.nav__list > .menu-item-has-children');

    links.each(function () {
        const link = $(this);
        const btnLink = link.find(' > svg');
        const linkMenu = link.find(' > .sub-menu');

        if (window.innerWidth > 1200) {
            link.on('mouseover', function () {
                linkMenu.addClass('active');
                link.addClass('active');
            });

            link.on('mouseout', function () {
                linkMenu.removeClass('active');
                links.removeClass('active');
            });
        } else {
            let isOpen = false;

            btnLink.on('click', function (event) {
                linkMenu.slideToggle();
                linkMenu.toggleClass('active');
                link.toggleClass('active');
                isOpen = !isOpen;
            });
        }
    });
}

hoverLink();