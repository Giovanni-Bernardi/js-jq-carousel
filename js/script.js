
function prevChange() {

    // IMG
    var activeImg = $('img.active');
    var prevImg = activeImg.prev('img');
    var contrImg = activeImg.hasClass('first');
    
    // DOTS
    var activeDot = $('.nav i.active');
    var prevDot = activeDot.prev('i');
    var contrDot = activeDot.hasClass('first')
    console.log(contrDot);
  

    console.log(contrImg);
  
    if (contrImg && contrDot) {
  
      prevDot = $('.nav i.last');
      activeDot.removeClass('active');
      prevDot.addClass('active');
 
      prevImg = $('img.last');
      activeImg.removeClass('active');
      prevImg.addClass('active');

    } else {
      activeDot.removeClass('active');
      prevDot.addClass('active');
  
      activeImg.removeClass('active');
      prevImg.addClass('active');
    }
  }
  

  function nextChange() {

    var activeDot = $('i.active');
    var nextDot = activeDot.next('i');
    var contrDot = activeDot.hasClass('last');
    var activeImg = $('img.active');
    var nextImg = activeImg.next('img');
    var contrImg = activeImg.hasClass('last');
  
    if (contrImg && contrDot) {
  
      nextDot = $('i.first');
      activeDot.removeClass('active');
      nextDot.addClass('active');
      nextImg = $('img.first');
      activeImg.removeClass('active');
      nextImg.addClass('active');

    } else {
      activeDot.removeClass('active');
      nextDot.addClass('active');
      activeImg.removeClass('active');
      nextImg.addClass('active');
  
  
    }
  }
  
  function init() {
    $('.prev').click(prevChange);
    $('.next').click(nextChange);
  }
  
  $(document).ready(init);