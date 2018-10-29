(function() {
    var totalSecond = 0;
    var remainingIntervalFlag = false;

    var textAreaFocus = false;
    var navTextAreaFocus = false;

    // 검색창 클릭시 placeholder 제거
    $('.textArea').on('click', function () {
        if(!textAreaFocus) $(this).html('');
        textAreaFocus = true;
    });

    $('.nav-textArea').on('click', function () {
        if(!navTextAreaFocus) $(this).html('');
        navTextAreaFocus = true;
    });



    // 검색창 아웃시 내용이 없으면 placeholder 생성
    $('.textArea').on('focusout', function () {
        if(!$(this).html()) $(this).html('<span class="t-placeholder"> 검색어를 입력하세요.<span class="blink">&nbsp;</span></span>');
        textAreaFocus = false;
    });

    $('.nav-textArea').on('focusout', function () {
        // console.log($(this));
        if(!$(this).html()) $(this).html('검색어를 입력하세요.');
        navTextAreaFocus = false;
    });

        // 자식 아이템 hover 상단 헤더 투명도 조절
    $('.cardBoxItem').hover(function () {
        $(this).parent().parent().children('.cardBoxHead').css('opacity', 1);
    }, function () {
        $(this).parent().parent().children('.cardBoxHead').css('opacity', 0.8);
    });

    // 아이템내 이미지 hover 처리
    $('.cardBoxItem .imgDiv').hover(function () {
        var remainingText = $(this).children('.remainingDateText');
        var parsent = $(this).parent();
        var remaininTime = parsent.attr('data-value');

        if(remaininTime) {
            // D이면 날짜, 아니면 데이터 포맷 형식
            if(remaininTime[0] === 'D') {
                remainingText.html(remaininTime);
            } else {
                remainingText.html(remaininTime);
                var dateFormat = remaininTime.split(':');
                var hour = Number(dateFormat[0]) * 3600;
                var min = Number(dateFormat[1]) * 60;
                var second = Number(dateFormat[2]);
                totalSecond = hour+min+second;

                // 1초씩 반복, 초단위 계산하여 데이터 포맷 만든 후 뷰에 노출
                remainingIntervalFlag = setInterval(function () {
                    if(remainingIntervalFlag) {
                        totalSecond -= 1;

                        //소수점 제거
                        min = parseInt(totalSecond/60);
                        hour = parseInt(min/60);
                        second = totalSecond % 60;
                        min = min % 60;

                        // 2자리수 만들기
                        hour = hour < 10 ? '0' + hour : hour;
                        min = min < 10 ? '0' + min : min;
                        second = second < 10 ? '0' + second : second;
                        var viewData = hour+':'+min+':'+second;

                        // 데이터 저장
                        parsent.attr('data-value', viewData);
                        // 뷰 노출
                        remainingText.html(viewData);
                    }
                },1000);
            }
            // hover 글씨 노출처리
            remainingText.css('visibility', 'visible');
        }
    }, function () {
        var remainingText = $(this).children('.remainingDateText');
        remainingText.css('visibility', 'hidden');
        // hover out 반복 제거
        clearInterval(remainingIntervalFlag);
    });

})();
