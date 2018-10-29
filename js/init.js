var module;
(function ($) {
    $(function () {

        var width = $(window).width();
        // 테스트 환경이 PC인 관계로 해상도로 구분처리
        if ((width < 1024)) {
            $('#top-nav').addClass('jbFixed');
        } else {
            var targetOjbect = $('.categoryUl').offset().top;
            $(window).scroll(function () {
                if ($(document).scrollTop() > targetOjbect + 500) {
                    $('#top-nav').css('display', "block");
                    $('#top-nav').addClass('jbFixed');
                } else {
                    $('#top-nav').css('display', "none");
                    $('#top-nav').removeClass('jbFixed');
                }
            });
        }

        $('.sidenav').sidenav();
        $('.parallax').parallax();

        $(".dCateCardDiv").slick({

            // normal options...
            // 노출 개수
            slidesToShow: 5,
            // 스크롤시 이동될 개수
            slidesToScroll: 1,
            adaptiveHeight: true,
            infinite: false,
            // the magic

            // 해상도별 설정
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
            // arrows : false


        });

        // 상세카테고리 before 리스너
        $('.fa-chevron-left').on('click', function (event) {
            // 부모의 ID로 구분해 화면 이동처리
            var contextId = $(this).parent().parent().attr('id').replace('Arrow', '');
            $('#' + contextId).slick("slickPrev");
        });

        // 상세카테고리 after 리스너
        $('.fa-chevron-right').on('click', function (event) {
            // 부모의 ID로 구분해 화면 이동처리
            var contextId = $(this).parent().parent().attr('id').replace('Arrow', '');
            $('#' + contextId).slick("slickNext");
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space
