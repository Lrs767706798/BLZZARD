$().extend({size: function(){return this.elements.length;}})
$(function(){
  

    var oBtns = $(".body-images-bg").find("div");
    var oUl = $(".body-images-bg");
    var iNow = 0;
    var timer = null;
    timer = setInterval(timerInner, 4000);
    function timerInner(){
        iNow++;
        tab();
    }
    function tab(){
        oUl.animate({top: iNow * -300},0, function(){
            if(iNow == oBtns.size()){
                iNow = 0;
                oUl.css("top", "0px");
            }
        });
    }
    oBtns.click(function(){
        iNow = $(this).index();
        tab();
    })
    $(".body-images-bg").hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(timerInner, 4000);
    })

    $("#body-images-left").click(function () {
        var oUltop = oUl.position().top;
        if(oUltop == -2100){
            oUltop = 0;
        }
        oUl.css("top",oUltop - 300) ;
    })
    $("#body-images-right").click(function () {
        var oUltop = oUl.position().top;
        if(oUltop == 0){
            oUltop = -2400;
        }
        oUl.css("top",oUltop + 300) ;
    })
    

})