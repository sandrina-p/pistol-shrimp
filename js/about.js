$(document).ready(function(){

   //DIMIUIR SECÇOES
   $('.about-s').hover (function(){
      $(this).css({
         'width': '300px',
         'height': 'auto'
      });

      $(this).find('.more').slideToggle("0.3");
   }, function() {
      $(this).css({
         'width': '',
         'height': '100px'
      });

      $(this).find('.more').slideToggle("0.1");
   });
   //
$('#intro li:nth-child(1) .m-title').mouseenter(function(e){ // FIRST HOVER NA CAIXA
   $('#intro li:nth-child(1)').mousemove(function(e){ // OUTROS HOVER NA SECCAO

      // mudar a cor apenas a partir de metade do ecra
      var $mouseX = e.pageY - ($(window).height() / 2);

      // dividir ecra em 255*2
      var $width = ($(document).height())/510;

      // posiçao do mouseX em cor
      var $PageBGr = parseInt($mouseX / $width);
      var $PagePr = parseInt( 255 - (e.pageY / $width));

      var $PageBGl = parseInt( 255 - ($mouseX / $width));
      var $PagePl = parseInt( e.pageY / $width);


      if (e.pageY > ($(window).height() / 2) ) {
         $('#intro li:nth-child(1)').find(".m-content").css("background-color", "rgba("+$PageBGr+","+$PageBGr+","+$PageBGr+", 1)");
         $('#intro li:nth-child(1)').find("p, h3, .more, .m-title, h4").css("color", "rgba("+$PageBGl+","+$PageBGl+","+$PageBGl+", 1)");


      } else {
         $('#intro li:nth-child(1)').find(".m-content").css("background-color", "rgba("+$PagePr+","+$PagePr+","+$PagePr+", 1)");
         $('#intro li:nth-child(1)').find("p, h3, .more, .m-title, h4").css("color", "rgba("+$PagePl+","+$PagePl+","+$PagePl+", 1)");
      }

   });
});

});
