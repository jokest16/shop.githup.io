$(function(){
  var count = 0, minus = $('.minus'), pageLink = $('.page-list-link'),bigDiv = $('.shop-product-item');
  $('.modal-bg').hide();
  pageLink.on('click',function() {//первая активная страница
    pageLink.removeClass('red-star');
  });
  minus.on('click',function() {
    count++//плюс/минус
    if(count % 2 === 0){
      $(this).css('animation-name','move-back').css('transform','rotate(0deg) scale(1)');
      $(this).find('.pluse').css('animation-name','opac-back').css('opacity','0');
    }else{
      $(this).css('animation-name','move').css('transform','rotate(-90deg) scale(.7)');// первый поворот класса плюс
      $(this).find('.pluse').css('animation-name','opac').css('opacity','1');// появление класса плюс
    }
  });
  if(window.screen.width < 1200){
    $('.shop').find('.container').css('width','100%');
  }
  $('.shop-product-item').on('click',function (){
    $(this).css('position','fixed');
    $(this).css('z-index','101');
    $(this).css('transition','none');
    $(this).animate({
      top : '20%',
      right : '45%'
    },1000);
    $('.modal-bg').css('display','block');
    $('.modal-bg').show();
    $('.modal-bg').on('click', function () {
      $(this).hide();
      bigDiv.css('position','static').css('z-index','inherit');
    });
  });
});
