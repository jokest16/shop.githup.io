$(function(){
  var count = 0, minus = $('.minus');
  minus.on('click',function() {
    count++
    if(count % 2 === 0){
      $(this).css('animation-name','move-back').css('transform','rotate(0deg) scale(1)');
      $(this).find('.pluse').css('animation-name','opac-back').css('opacity','0');
    }else{
      $(this).css('animation-name','move').css('transform','rotate(-90deg) scale(.7)');// первый поворот класса плюс
      $(this).find('.pluse').css('animation-name','opac').css('opacity','1');// появление класса плюс
    }
  });
});
