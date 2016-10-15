$(function(){
  var count = 0, minus = $('.minus'), pageLink = $('.page-list-link'),bigDiv = $('.shop-product-item');
  pageLink.on('click',function() {//первая активная страница
    pageLink.removeClass('red-star');
  });
  $('.text-prod').hide();
  minus.on('click',function(event) {
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
  bigDiv.on('click',function (){
    var cloneDiv = $(this).clone();//клонируем айтем с товаром для того чтобы не ломалась вёрстка
    cloneDiv.find('.text-prod').show();
    $('body').prepend('<div class= "modal-bg">');
    $('.modal-bg').animate({//показываем блок с содержимым
      opacity: 1
    },400);
    $('.modal-bg').prepend(cloneDiv);//суём клон в начало блока
    $(this).css('opacity','0');//прячем оригинал
    $('.modal-bg').on('click', function () {
      bigDiv.animate({//показываем оригинал
        opacity: 1
      },400);
      $('.modal-bg').animate({//прячем фон
          opacity: .0
        },400,function () {
          $('.modal-bg').remove();//и удалеем его
      });
    });
  });
  $('.button-scroll-top').on('click',function(){
    $('html,body').animate({
    scrollTop: $('#top').offset().top
  },500);
  });
});
