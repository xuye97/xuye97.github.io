$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});
// var oHead = document.getElementsByTagName("HEAD").item(0);
// var oScript = document.createElement("script");
// oScript.type = "text/javascript";
// oScript.src = "https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js";
// oScript.charset="utf-8";
// oHead.appendChild(oScript);

//每日一言
var hitokoto="https://v1.hitokoto.cn";
var hitText=document.getElementById("meiriyiyan");
var xhr=new XMLHttpRequest();
xhr.open("get","https://v1.hitokoto.cn");
xhr.onreadystatechange=function()
{var data=JSON.parse(xhr.responseText);hitText.innerHTML="「&nbsp;&nbsp;"+data.hitokoto+"」"+"   ——  "+data.from};
xhr.send();;

// 站点运行时间
function runtime(){
    // 初始时间，日/月/年 时:分:秒
    X = new Date("01/04/2021 8:32:00");
    Y = new Date();
    T = (Y.getTime()-X.getTime());
    M = 24*60*60*1000;
    a = T/M;
    A = Math.floor(a);
    b = (a-A)*24;
    B = Math.floor(b);
    c = (b-B)*60;
    C = Math.floor((b-B)*60);
    D = Math.floor((c-C)*60);
    document.getElementById('benzhanmianqiangyunxing').innerHTML = "本站勉强运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"
}
setInterval(runtime, 1000);
