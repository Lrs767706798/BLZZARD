$(function () {

    $(".content-cont").on("click",".sc_goodsDelete",function () {
        var id = this.id;

        var cookieStr = $.cookie("goods");
        var arr = eval(cookieStr);
        for(var i = arr.length - 1; i >= 0; i--){
            if(arr[i].id == id){
                arr.splice(i, 1);
                break;
            }
        }
        $.cookie("goods", JSON.stringify(arr), {expires: 7});


        var node = this.parentNode;
        node.parentNode.removeChild(node);

    })

    $(".content-cont").on("click",".sc_goodsDown",function () {
        var id = this.id;

        var cookieStr = $.cookie("goods");
        var arr = eval(cookieStr);
        for(var i = arr.length - 1; i >= 0; i--){
            if(arr[i].id == id){
                arr[i].num = arr[i].num - 1;
                break;
            }
        }
        $.cookie("goods", JSON.stringify(arr), {expires: 7});


        var node = this.parentNode;


        $(this).parent().find(".sc_goodsnumber").html( parseInt($(this).parent().find(".sc_goodsnumber").html()) - 1);

        if( parseInt($(this).parent().find(".sc_goodsnumber").html()) == 0){

            $(this).parent().parent().css("display","none");
            for(var i = arr.length - 1; i >= 0; i--){
                if(arr[i].id == id){
                    arr.splice(i, 1);
                    break;
                }
            }
            $.cookie("goods", JSON.stringify(arr), {expires: 7});

        }

        if($.cookie("goods") == "[]"){

            $(".body-content").css("display","none");
            $(".body-content1").css("display","block");
        }

    })
    $(".content-cont").on("click",".sc_goodsUp",function () {
        var id = this.id;

        var cookieStr = $.cookie("goods");
        var arr = eval(cookieStr);
        for(var i = arr.length - 1; i >= 0; i--){
            if(arr[i].id == id){
                arr[i].num = arr[i].num + 1;
                break;
            }
        }
        $.cookie("goods", JSON.stringify(arr), {expires: 7});


        var node = this.parentNode;

        $(this).parent().find(".sc_goodsnumber").html( parseInt($(this).parent().find(".sc_goodsnumber").html()) + 1);



    })

 
    
})