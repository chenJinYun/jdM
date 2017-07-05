// 设置滑动事件
var content=$('.index-banner');
var ul=$('.banner-img');
var move=$('.banner-img li').width();
var cir=$('.banner-index li');
console.log(move);
function changeImg(){
  var index=1;
   // 自动轮播
    var timer=setInterval(function(){
      // 每滑一次就加一，移动相应的距离
     index++;
    //  使用动画移动相应的距离
      ul.animate({
        transform:'translateX('+index*move*-1+'px)'
         // 设置小圆点的样式
      },1000,function(){
        if(index>=9){
          // 滑到最后一个，就立刻回到第二张图片
          index=1;
          // 强制让ul回到第一张
          ul.css({
            transform:'translateX('+index*move*-1+'px)'
          })
        }
          cir.removeClass('current').eq(index-1).addClass('current'); 
      })
    },1000)  
     content.mouseenter(function(){
       clearInterval(timer);
     })
  // 左滑
  content.swipeLeft(function(){
    // 每滑一次就加一，移动相应的距离
     index++;
    //  使用动画移动相应的距离
      ul.animate({
        transform:'translateX('+index*move*-1+'px)'
         // 设置小圆点的样式
      },1000,function(){
        if(index>=9){
          // 滑到最后一个，就立刻回到第二张图片
          index=1;
          // 强制让ul回到第一张
          ul.css({
            transform:'translateX('+index*move*-1+'px)'
          })
        }
          cir.removeClass('current').eq(index-1).addClass('current'); 
      })
    
  })
  // 右滑
   content.swipeRight(function(){
    // 每滑一次就加一，移动相应的距离
     index--;
    //  使用动画移动相应的距离
      ul.animate({
        transform:'translateX('+index*move*-1+'px)'
         // 设置小圆点的样式
      },1000,function(){
        if(index<=0){
          // 滑到最后一个，就立刻回到第二张图片
          index=8;
          // 强制让ul回到第一张
          ul.css({
            transform:'translateX('+index*move*-1+'px)'
          })
        }
          cir.removeClass('current').eq(index-1).addClass('current'); 
      })
   })
}
changeImg();