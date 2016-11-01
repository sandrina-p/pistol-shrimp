
   //JS INTRO
   window.onload=function() {

      // setTimeout(function(){
      //    $('h6').css({
      //       'visibility':'visible',
      //    });
      // },500);
   }

   $(document).ready(function(){

      $('#loading-content h6').hide().delay(5000).fadeIn();
      $('#loading-content #loading-icon').show().delay(5000).fadeOut();

      $('canvas#defaultCanvas.p5_hidden').on('click', function(){
         $(this).hide();
      });


   ////////ALL DEVICES
      // SKIP INTRO
      $('#loading-content h6').on('click', function(){
         $('#loading-bg, #loading-content').animate({
            left: "-100vw",
         }, function() {
         });

         $('canvas').animate({
            left: "-100vw",
         }, function() {
         });


         $('canvas#gamee').animate({
            left: "0",
         }, function() {
         });
      });

   ////////DESKTOP + TABLET
   if (matchMedia('screen and (min-width: 601px)').matches) {

      //MOUSEOVER OU CLICK NUMA DAS CAIXAS
      $('.m-title').on('click mouseover', function () {

         // OUTRAS CAIXA DA SECCAO
         $('.m-title').css({
            'transform': '',
            'margin-left': '',
            'margin-top': '',
            'cursor':''
         });

         //ESTA CAIXA DA SECCAO
         $(this).css({
            'transform': 'rotate(0deg)',
            'margin-top': '5vh',
            'cursor':'default'
         });

         //OUTROS CONTEUDO DA SECÇAO
         $('.m-content').css({
            'visibility': '',
            'display': '',
         });

         //ESTE CONTEUDO DA SECÇAO
         $(this).parent().find('.m-content').css({
            'visibility': 'visible',
            'display': 'block',
         });

         //OUTRAS AREA DA SECÇAO
         $('ul#intro li').css({
            'width': '57px',
         });

         //ESTA AREA DA SECÇAO
         $(this).parent().css({
            'width': 'calc(100vw - 171px)',
         });

         //CONTRADIZER JS COLOR E.MOUSE
         $('h4').css({
            'color': 'white',
         });

         //RESET SKEW ARTISTS
         $('#artists .artists-item').css({
            'transform': '',
            'transition': '',
            'opacity': ''
         });

         //RESET CAIXAS
         $('h4').css({
            border:'',
            cursor:'',
         });

         //TRANSFORM CAIXA SELECTED
         $(this).find('h4').css({
            'border':'0',
            'border-bottom':'7px solid',
            'cursor':'default',
         });

         //RELEASES SHOW TIP
         $('h6').show();
      });


      //////// ARTISTS //////////

      //HOVER ARTISTS
      $('#artists .artists-item').hover(function(){
         $(this).css({
            'transform': 'skew(0, 0) scale(1, 1)',
            'transition': 'all .3s ease-in-out',
            'opacity': '1'
         });
      }, function() {
         $(this).css({
            'transform': '',
            'transition': '',
            'opacity': ''
         });
      });


      // CLICK BLEIDDWN
      $('.artists-item:nth-child(1)').on('click', function(){
         $('#artists-deep').show();
         $('.artists-deep-list:nth-child(1)').filter('.ad-bg-x').show();


         $('.artists-deep-list:nth-child(1)').show().dequeue().delay(150).queue(function(){
            $(this).parent().find('.w-bio').show().dequeue().delay(180).queue(function(){
               $(this).parent().find('.w-link').show().dequeue().delay(190).queue(function(){
                  $(this).parent().find('.w-img').show().dequeue();
               });
            });
         });
      });

      // CLICK DA SHEEPLE
      $('.artists-item:nth-child(2)').on('click', function(){
         $('#artists-deep').show();
         $('.artists-deep-list:nth-child(2)').show().delay(150).queue(function(){
         });
         $("#daghosts").animate({
            opacity: "1",
         }, function() {

         });
      });

      // CLICK NESPAIRGHT
      $('.artists-item:nth-child(3)').on('click', function(){
         $('#artists-deep').show();
         $('.artists-deep-list:nth-child(3)').filter('.ad-bg-x').show();


         $('.artists-deep-list:nth-child(3)').show().dequeue().delay(150).queue(function(){
            $(this).parent().find('.w-bio').show().dequeue().delay(180).queue(function(){
               $(this).parent().find('.w-link').show().dequeue().delay(190).queue(function(){
                  $(this).parent().find('.w-img').show().dequeue();
               });
            });
         });
      });

      // CLICK ZURVAN
      $('.artists-item:nth-child(4)').on('click', function(){
         $('#artists-deep').show();
         $('.artists-deep-list:nth-child(4)').filter('.ad-bg-x').show();


         $('.artists-deep-list:nth-child(4)').show().dequeue().delay(150).queue(function(){
            $(this).parent().find('.w-bio').show().dequeue().delay(180).queue(function(){
               $(this).parent().find('.w-link').show().dequeue().delay(190).queue(function(){
                  $(this).parent().find('.w-img').show().dequeue();
               });
            });
         });
      });


      //CLICK ON BG-ARTIST TO CLOSE
      $('.ad-bg-x').click(function(){
         $('.w-bio, .w-link, .w-img').hide().dequeue();

         $(this).parent().hide().dequeue();
         $('#artists-deep').hide().dequeue();
      });

      //////// RELEASES //////////
      $('#releases .release-item').hover (function(){
         // show img the release
         $(this).find('img').show();

         // CHANGE RELEASE-ITEM
         $(this).css({
            'transform': 'skew(0, 0) scale(1, 1)',
            'transition': 'all .3s ease-in-out',
            'z-index':'2'
         });

         // show info de release
         $(this).find('.info').css({
            'max-height':'100px',
         });
      },function(){
         // RESET OUTROS RELEASE-ITEM
         $(this).css({
            'transform': '',
            'transition': '',
            'z-index': ''
         });

         // RESET INFO EVENT
         $(this).find('.info').css({
            'max-height':'',
         });
      });

      //////// EVENTS //////////
      $('#events-list .event-item').hover (function(){

         // CHANGE EVENT
         $(this).css({
            'transform': 'skew(0, 0) scale(1, 1)',
            'transition': 'all .3s ease-in-out',
         });

         // SHOW INFO EVENT
         $(this).find('.event-deep').css({
            'max-height':'1500px',
         });

      },function(){

         // RESET EVENT
         $(this).css({
            'transform': '',
            'transition': '',
         });

         // RESET INFO EVENT
         $(this).find('.event-deep').css({
            'max-height':'',
         });
      });
   }


   ////////DESKTOP ONLY
   if (matchMedia('screen and (min-width: 1024px)').matches) {
      $('.m-title').on('click mouseover', function () {

         //MOUSEENTER NA AREA DO ABOUT - BG DINAMICO
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
               $('#intro li:nth-child(1)').find("p, h3, .more, .m-title, h4, a").css("color", "rgba("+$PageBGl+","+$PageBGl+","+$PageBGl+", 1)");


            } else {
               $('#intro li:nth-child(1)').find(".m-content").css("background-color", "rgba("+$PagePr+","+$PagePr+","+$PagePr+", 1)");
               $('#intro li:nth-child(1)').find("p, h3, .more, .m-title, h4, a").css("color", "rgba("+$PagePl+","+$PagePl+","+$PagePl+", 1)");
            }
         });

         //RELEASES EVENT GAME
         $('#event-game').show();

         // POSIÇAO CANVAS ping-pong
         $('#gamee').css({
            'left':'auto !important',
         });
      });

      //CLICK ON BG-GAME TO CLOSE
      $('#game-bg').click(function(){
         $('#event-game').hide().dequeue();
      });
   }

});
