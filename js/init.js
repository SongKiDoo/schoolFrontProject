(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

        $(".dCateCardDiv").slick({

            // normal options...
            infinite: false,

            // the magic
            responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: true
                }

            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }

            }, {

                breakpoint: 300,
                settings: "unslick" // destroys slick

            }],
            arrows : false
            // appendArrows : $('.fa-chevron-left')


        });

        $('.fa-chevron-left').on('click', function(){
            $('#carCate').slick("slickPrev");
        });
        $('.fa-chevron-right').on('click', function(){
            $('#carCate').slick("slickNext");
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space
