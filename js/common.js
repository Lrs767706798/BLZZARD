window.onload = function () {
    $("#full-p1").click(function () {
        $(".full").fadeToggle(600);
        $("#full-p1").text("游戏∧");

    })
    $(".full").click(function () {
        $(".full").fadeOut(600);
        $("#full-p1").text("游戏∨");
    })
    $(".full1").click(function () {
        $(".full1").fadeOut(600);
        $("#login").text("我的账户∨");
     
    })
    $("#login").click(function () {
        $(".full1").fadeToggle(600);
        $("#login").text("我的账户∧");
    })
    $("#url-shop").click(function () {
        window.location.href = "../html/shop.html";
    })
    
}