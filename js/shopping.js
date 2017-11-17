$(function () {

    sc_car();
    $.ajax({
        type: "get",
        url: "../data/dota.json",
        success: function (res) {
            var html = "";

            for(var i = 0; i < res.length; i++){
                html += '<li><a class="clear" href="' + res[i].url + '">' + '<img src="' + res[i].pic +'"></a>' +  '<p>' + res[i].title + '</p>' + '<b>￥' + res[i].price + '</b>'+'<div class="btn-right" id=' + res[i].id + '>加入购物车</div>' + '</li>';
            }
            $(".body-cont-right").html(html);

        }

    })

    $(".body-cont-right").on("click", ".btn-right", function(){

        ballMove(this);

        var id = this.id;

        var first = $.cookie("goods") == null ? true : false;
        if(first){

            $.cookie("goods", '[{id:' + id + ',num:1}]', {
                expires: 7
            });
        }else{
            var str = $.cookie("goods");
            var arr = eval(str);
            var same = false;
            for(var i in arr){
                if(arr[i].id == id){
                    arr[i].num = arr[i].num + 1;
                    var cookieStr = JSON.stringify(arr);
                    $.cookie("goods", cookieStr,  {
                        expires: 7
                    });
                    same = true;
                    break;
                }
            }


            if(!same){
                var obj = {id: id, num: 1};
                arr.push(obj);
                var cookieStr = JSON.stringify(arr);
                $.cookie("goods", cookieStr, {
                    expires: 7
                });
            }

        }
        sc_car();



        return false;
    })

    function ballMove(node){

        $("#ball").css({
            display: "block",
            left: $(node).offset().left,
            top: $(node).offset().top
        })

        var offsetX = $(".sc_pic").offset().left - $("#ball").offset().left;
        var offsetY = $(".sc_pic").offset().top - $("#ball").offset().top;

        var bool = new Parabola({
            el: "#ball",
            targetEl: null,
            offset: [offsetX, offsetY],
            curvature: 0.0005,
            duration: 400,
            callback: function(){
                $("#ball").css("display", "none")
            }

        })

        bool.start();
    }


    $(".sc_right").mouseenter(function(){
        $(this).stop().animate({
            right: 0
        })
        sc_msg();
    });
    $(".sc_right").mouseleave(function(){
        $(this).stop().animate({
            right: -270
        })
    });

    function sc_car(){
        var sc_str = $.cookie("goods");

        if(sc_str){
            var sc_arr = eval(sc_str);
            
            var sc_num = 0;
            for(var i in sc_arr){
                sc_num = Number(sc_arr[i].num) + sc_num;
            }
            $(".sc_num").html(sc_num);
        }
    }

    function sc_msg(){
        $.ajax({
            url: "../data/dota.json",
            type: "get",
            success: function(res){
                var sc_arr = eval($.cookie("goods"));
                var html = '';
                for(var i in sc_arr){
                    html += '<li><div class="sc_goodsPic"><img src="' + res[sc_arr[i].id].pic + '" alt=""></div><div class="sc_goodsNum">已购买数量:'+sc_arr[i].num+'</div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsTitle"><p>' + res[sc_arr[i].id].title +'</p></div></li>';
                }
                $(".sc_right ul").html(html);
            }
        })
    }


})