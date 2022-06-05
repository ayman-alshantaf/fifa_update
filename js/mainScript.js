$(document).ready(function() {
    $('.slider-congress').slick({
        rtl: true,
        dots: false,
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

                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.table-results .slider-result').slick({
        rtl: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.card-results .all-slider').slick({
        rtl: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.table-body').on('click' , function (){
        $(this).siblings().find(".body-table").slideUp("slow");
        $(this).find(".body-table").slideDown("slow");
        $(this).find(".fa").addClass("fa-chevron-down");
        $(this).siblings().find(".fa").addClass("fa-chevron-up")
        $(this).siblings().find(".fa").removeClass("fa-chevron-down")

    })
})
