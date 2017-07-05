// 导航透明度
function changeColor(){
  var header=$('header');
  var maxHeight=$('.index-banner').height();
  $(window).scroll(function(){
    var height=$(document.body).scrollTop();
    var op=height/maxHeight;
    if(op>1){
      op=0.8;
    }
    header.css({
      backgroundColor:'rgba(253,48,61,'+op+')'
    })
  })
}
changeColor();
// 倒计时
function changeTime(){
  var lis=$('.second-kill .top li');
  var total=5456;
   var time=setInterval(function(){
     total--;
     if(total==0){
       clearInterval(time);
       alert("结束了。。。");
       return;
     }
     var hour=Math.floor(total/3600);
     var min=Math.floor(total%3600/60);
     var sec=total%60;
    //  时，
    lis.eq(0).text(Math.floor(hour/10));
    lis.eq(1).text(hour%10);
    // 分，
      lis.eq(3).text(Math.floor(min/10));
    lis.eq(4).text(min%10);
    // 秒
      lis.eq(6).text(Math.floor(sec/10));
    lis.eq(7).text(sec%10);


   },100)
}
changeTime();