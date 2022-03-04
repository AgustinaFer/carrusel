var barraProgreso = 0;

var owl = $('.owl-carousel').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  items: 3,
  navText: ['<div class="fas fa-chevron-left" id="izq"></div>','<div class="fas fa-chevron-right" id="der"></div>'],
  responsive:{
    0:{
      items: 1,
    },
    768:{
      items: 1,
    },
    990:{
      items: 1.9,
    }
  },
  onInitialized: coverFlowEfx,
  onTranslate: coverFlowEfx,


   


});
$(".owl-next").click(function(){
    move('der');
})
$(".owl-prev").click(function(){
   move('izq');
})

function coverFlowEfx(e){
  if ($('.owl-dots')) {
    $('.owl-dots').remove();
  }
  idx = e.item.index;
  $('.owl-item.big').removeClass('big');
  $('.owl-item.medium').removeClass('medium');
  $('.owl-item.mdright').removeClass('mdright');
  $('.owl-item.mdleft').removeClass('mdleft');
  $('.owl-item.smallRight').removeClass('smallRight');
  $('.owl-item.smallLeft').removeClass('smallLeft');
  $('.owl-item').eq(idx -1).addClass('medium mdleft');
  $('.owl-item').eq(idx).addClass('big');
  $('.owl-item').eq(idx + 1).addClass('medium mdright');
  $('.owl-item').eq(idx + 2).addClass('smallRight');
  $('.owl-item').eq(idx - 2).addClass('smallLeft');
}

var click = false;

$('#play-carousel').click(function(evt) {
  click = !click;
  if(click){
    $('.status').html('Autoplay: ON');
    $('.owl-carousel').trigger('play.owl.autoplay', [1000, 1000]);
    $(this).html("Stop");
  } else {
    $('.owl-carousel').trigger('stop.owl.autoplay');
    $(this).html("Play");
    $('.status').html('Autoplay: OFF');
  }

});

function move(movimiento){
    let barra = document.getElementById('barra-progreso');
    let posActual = barraProgreso * 75;    
    if(movimiento=='izq' && barraProgreso == 0){
      barra.style.transform = `translate3d(300%, 0px, 0px)`;
      posActual = 300;
      barraProgreso = 4;
    }
    else if (movimiento=='izq'  && barraProgreso != 0) {
        posActual = posActual - 75;
        barra.style.transform = `translate3d(${posActual}%, 0px, 0px)`
        barraProgreso --;
    }
    else if(movimiento=='der' && barraProgreso == 4){
      posActual = 0;
      barra.style.transform = `translate3d(0%, 0px, 0px)`
      barraProgreso = 0;
    }
    else if (movimiento=='der'  && barraProgreso != 4) {
        posActual = posActual + 75;
        barra.style.transform = `translate3d(${posActual}%, 0px, 0px)`   
        barraProgreso ++;
    }
  }
