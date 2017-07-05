// 改变导航的透明度
// 获取屏幕滚动高度，得到最大滚动距离，得到透明度，限制透明度，改变导航透明度
function changeColor(){
var header=document.querySelector('header');
var maxHeight=document.querySelector('.second-kill').offsetHeight;
// console.log(maxHeight);
// 滚动事件
window.onscroll=function(){
    var scollHeight=document.body.scrollTop;
    // console.log(scollHeight);
    // 两个数相除，得到透明度
    var op=parseFloat(scollHeight/maxHeight);
    // console.log(op);
    if(op>1){
      op=0.8;
    }
    header.style.backgroundColor='rgba(253,48,61,'+op+')';
}
}
changeColor();

function changeTime(){
  // 倒计时思路，
      // 先设定一个以秒为单位的总时间
      // 每一次减一
      // 总时间换算成时分秒
      // 在根据时分秒给每个li标签设置十位个位的具体数值
      // 获取元素
      var liLis=document.querySelectorAll('.second-kill .top li');
      //总时间 
      var total=5678;
      // 定时器
     var timer= setInterval(function(){
        total--;
        if(total<0){
          clearInterval(timer);
          alert('今天的抢购结束了！');
          return;
        }
        var hour=Math.floor(total/3600);
        var min=Math.floor(total%3600/60);
        var sec=total%60;
        // 时 十位，个位
        liLis[0].innerHTML=Math.floor(hour/10);
        liLis[1].innerHTML=Math.floor(hour%10);
         // 分 十位，个位
        liLis[3].innerHTML=Math.floor(min/10);
        liLis[4].innerHTML=Math.floor(min%10);
         // 秒 十位，个位
        liLis[6].innerHTML=Math.floor(sec/10);
        liLis[7].innerHTML=Math.floor(sec%10);
      },10)
}
changeTime();
