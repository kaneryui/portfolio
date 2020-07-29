$(document).ready(function(){
    
    //탑버튼
    $(".t_btn").hide(); // 탑 버튼 숨김
    $(function () {
                 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) { // 스크롤 내릴 표시
                $('.t_btn').fadeIn();
            } else {
                $('.t_btn').fadeOut();
            }
        });
                
        $('.t_btn').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);  // 탑 이동 스크롤 속도
            return false;
        });
    });
    
    //메인백그라운드
    $('#main').particleground({
    dotColor: '#ffffff',
    lineColor: '#f6dbdb'
    })
    
    //wow
    wow = new WOW(
	  {
	  mobile:false,       // default
	})
	wow.init();
});