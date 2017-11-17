window.onload = function () {

    var Num = document.getElementById("number");
    var numspan = document.getElementById("number_span");
    Num.onblur = function(){
        var oNum = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        var eNum = oNum.test(Num.value);
        if(eNum != true) {
            numspan.innerHTML = "对不起，您身份证输入有误！";
        }
        else {
            numspan.innerHTML = " ";
        }
    };

    var Nam = document.getElementById("name");
    var namespan = document.getElementById("name_span");
    Nam.onblur = function () {
        var oNam = /^[a-zA-Z_]\w{5,15}$/;
        var eNam = oNam.test(Nam.value);
        if(eNam != true) {
            namespan.innerHTML = "对不起，您账号输入有误！";
        }
        else{
            namespan.innerHTML = " ";
        }
    };

    var Email = document.getElementById("email");
    var emailspan = document.getElementById("email_span");
    Email.onblur = function () {
        var oEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        var eEmail = oEmail.test(Email.value);
        if(eEmail != true) {
            emailspan.innerHTML = "对不起，您邮箱输入有误！";
        }
        else{
            emailspan.innerHTML = " ";
        }
    };

    var Pas = document.getElementById("password");
    var Pspan = document.getElementById("password_span");
    Pas.onblur = function () {
        var oPas = /^[0-9a-zA-Z]\w{5,17}$/;
        var ePspan = oPas.test(Pas.value);
        if(ePspan != true) {
            Pspan.innerHTML = "对不起，您密码格式输入有误！";
        }
        else{
            Pspan.innerHTML = " ";
        }
    };

    var Pas1 = document.getElementById("password1");
    var Pspan1 = document.getElementById("password_span1");
    Pas1.onblur = function () {
        var oPas1 = /^[0-9a-zA-Z]\w{5,17}$/;
        var ePspan1 = oPas1.test(Pas.value);
        if(ePspan1 != true) {
            Pspan1.innerHTML = "对不起，您密码格式输入有误！";
        }
        else if(Pas.value == Pas1.value){
            Pspan1.innerHTML = " ";
        }
        else{
            Pspan1.innerHTML = "对不起，两次密码输入不一致！";

        }
    };




    TakeRanNum();

    oA.onclick = function () {
        TakeRanNum();
        var oA = document.getElementById("span");
        var verifyspan = document.getElementById("verify_span");
        var oVer = document.getElementById("verify");
        oVer.onblur = function () {
            if(oVer.value != RanNum){
                verifyspan.innerHTML = "验证码输入错误！";
            }
        };
    };


    function TakeRanNum() {
        var p = document.getElementById("num_span");
        p.style.color = "rgba(" + parseInt(Math.random() * 255) + ","+
            parseInt(Math.random() * 255) + ","+ parseInt(Math.random() * 255) +",1)";
        var RanNum = rannum() + rannum() + rannum() + rannum();
        p.innerHTML = RanNum;
    }


    function rannum() {
        var n = parseInt(Math.random() * 3);
        switch(n){
            case 0:
                return parseInt(Math.random()*10);
                break;
            case 1:
                return String.fromCharCode(65 + parseInt(Math.random() * 25));
                break;
            case 2:
                return String.fromCharCode(97 + parseInt(Math.random() * 25));

        }
    }















}
