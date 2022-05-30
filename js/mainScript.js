$(document).ready(function() {
    $('.slider-congress').slick({
        rtl: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    variableWidth: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }
        ]
    });

})
