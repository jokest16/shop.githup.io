$(function(){
  var count = 0,
      minus = $('.minus'), //кнопка минус
      pageLink = $('.page-list-link'),// активаня страница
      bigDiv = $('.shop-product-item');// item с товаром
  pageLink.on('click',function() {//первая активная страница
    pageLink.removeClass('red-star');
  });
  //конец
  $('.text-prod').hide();//прячем текст
  minus.on('click',function(event) {//поворот минуса в плюс
    count++
    if(count % 2 === 0){
      $(this).css('animation-name','move-back').css('transform','rotate(0deg) scale(1)');
      $(this).find('.pluse').css('animation-name','opac-back').css('opacity','0');
      //this.off('click');
    }else{
      $(this).css('animation-name','move').css('transform','rotate(-90deg) scale(.7)');// первый поворот класса плюс
      $(this).find('.pluse').css('animation-name','opac').css('opacity','1');// появление класса плюс
    }
  });


  //
  $( "#slider-range" ).slider({//ползунок
      range: true,
      min: 0,
      max: 900,
      values: [ 0, 900 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
      //конец ползунка
  if(window.screen.width < 1200){
    $('.shop').find('.container').css('width','100%');
  }//немного адаптива
  bigDiv.on('click',function (){//popup окно с описанием товара
    var cloneDiv = $(this).clone();//клонируем кликнутный айтем с товаром для того чтобы не ломалась вёрстка
    cloneDiv.find('.text-prod').show();
    $('body').prepend('<div class= "modal-bg">');//это блок с фоном
    $('body').prepend('<div class= "popup">');//это блок с item товара
    $('.popup').prepend(cloneDiv);//суём клон в начало блока
    $('.modal-bg').animate({//показываем блок с содержимым
      opacity: .5
    },400);
    $(this).css('opacity','0');//прячем оригинал
    $('.modal-bg').on('click', function () {
      bigDiv.animate({//показываем оригинал
        opacity: 1
      },400, function () {
      });
      $('.popup').animate({//прячем item
          opacity: .0
        });
      $('.modal-bg').animate({//прячем фон
          opacity: .0
        },400,function () {
          $('.modal-bg').remove();//и удалеем его
          $('.popup').remove();
      });
    });
  });
  $('.button-scroll-top').on('click',function(){//плавный скрол вверх до header
      $('html,body').animate({
      scrollTop: $('#top').offset().top
    },500);
  });
});
