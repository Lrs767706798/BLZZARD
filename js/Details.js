$(function () {

    
    if($.cookie("goods")){
        sc_msg();

    }else {
        $(".body-content").css("display","none");
        $(".body-content1").css("display","block");
    }


    




    $(".head-left p:nth-of-type(2)").click(function () {
        window.location.href="shop.html"
    })






    function sc_msg(){
   
        $.ajax({
            url: "../data/dota.json",
            type: "get",
            success: function(res){
                var sc_arr = eval($.cookie("goods"));
                var html = '';
                for(var i in sc_arr){

                    html += '<section class="clear" id=' + sc_arr[i].id+'><div class="sc_goodsPic"><img src="'
                        + res[sc_arr[i].id].pic +
                        '" alt=""></div><div class="sc_goodsTitle"><p>'
                        + res[sc_arr[i].id].title +
                        '</p></div><div class="sc_goodsPrice">￥'
                        + res[sc_arr[i].id].price +
                        '</div><div class="sc_goodsNum"><p class="sc_goodsDown" id='+sc_arr[i].id+'>-</p><div class="sc_goodsnumber">'
                        + sc_arr[i].num +
                        '</div><p class="sc_goodsUp" id='+sc_arr[i].id+'>+</p></div><div class="sc_goodsRate">￥' +
                        + sc_arr[i].num * res[sc_arr[i].id].price  +
                        '</div><div class="sc_goodsDelete" id='+sc_arr[i].id+'>删除</div></section>';
                }
                $(".content-cont").html(html);
            }
        })
    }

})