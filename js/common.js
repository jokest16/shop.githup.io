$(function(){
  var count = 0;
  $('.minus').on('click',function() {
    count++
    if(count % 2 === 0){
      $('.minus').css('animation-name','move-back');
      $('.minus').css('transform','rotate(0deg) scale(1)');
      $('.pluse').css('animation-name','opac-back');
      $('.pluse').css('opacity','0');
    }else{
      $('.minus').css('animation-name','move');
      $('.minus').css('transform','rotate(-90deg) scale(.7)');
      $('.minus').css('left','-10px');
      $('.pluse').css('animation-name','opac');
      $('.pluse').css('opacity','1');
    }
  });
});
