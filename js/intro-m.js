////////MOBILE + TABLET

if (matchMedia('screen and (max-width: 1024px)').matches) {

   ////CLICK NUMA DAS DA CAIXAS
   $('.m-title').on('click', function(){

      //OUTROS CONTEUDO DA SECÇAO
      $('.m-content').css({
         'max-height': '0px',
      });

      if ( $(this).parent().find('.m-content').css('max-height') === '0px') {
         $(this).parent().find('.m-content').css({
            'max-height': '2500px',
         });
      } else {
         $('.m-content').css({
            'max-height': '0px',
         });
      }

      //RESET CAIXAS
      $('h4').css({
         border:'',
         cursor:'',
      });

      //TRANSFORM CAIXAS
      $(this).find('h4').css({
         'border':'0',
         'border-bottom':'7px solid',
         'cursor':'default',
      });

      //RELEASES SHOW TIP
      $('h6').show();

   });


   //////// ABOUT //////////

   //FDP DO SCROLL !! GET THE FUCK AWAY
   $( ".ad-window" ).removeClass('resize-drag draggable');

   //////// ARTISTS //////////
   //HOVER ARTISTS
   $('#artists .artists-item').click(function(){
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
      // $('.artists-deep-list:nth-child(1)').filter('.ad-bg-x').show();

      $('.artists-deep-list:nth-child(1)').show().dequeue().delay(150).queue(function(){
         $(this).parent().find('.w-bio').show().dequeue().delay(180).queue(function(){
            $(this).parent().find('.w-link').show().dequeue().delay(190).queue(function(){
               $(this).parent().find('.w-img').show().dequeue().delay(200).queue(function(){
                  $(this).parent().find('.w-close').show().dequeue();
               });
            });
         });
      });
   });

   // CLICK DA SHEEPLE
   $('.artists-item:nth-child(2)').on('click', function(){
      $('#artists-deep').show();
      $('.artists-deep-list:nth-child(2)').filter('.ad-bg-x').show();

      $('.artists-deep-list:nth-child(2)').show().delay(150).queue(function(){
         // $( "#dafuck" ).animate({
         //    lineHeight: "+300",
         // }, function() {
         //
         // });
      });
      $("#daghosts").animate({
         opacity: "1",
      }, function() {

      });
   });

   // CLICK NESPAIRGHT
   $('.artists-item:nth-child(3)').on('click', function(){
      $('#artists-deep').show();
      // $('.artists-deep-list:nth-child(3)').filter('.ad-bg-x').show();

      $('.artists-deep-list:nth-child(3)').show().dequeue().delay(150).queue(function(){
         $(this).parent().find('.w-bio').show().dequeue().delay(180).queue(function(){
            $(this).parent().find('.w-link').show().dequeue().delay(190).queue(function(){
               $(this).parent().find('.w-img').show().dequeue().delay(200).queue(function(){
                  $(this).parent().find('.w-close').show().dequeue();
               });
            });
         });
      });
   });

   // CLICK ZURVAN
   $('.artists-item:nth-child(4)').on('click', function(){
      $('#artists-deep').show();

      // $('.artists-deep-list:nth-child(1)').filter('.ad-bg-x').show();

      $('.artists-deep-list:nth-child(4)').show().dequeue().delay(150).queue(function(){
         $(this).parent().find('.w-bio').show().dequeue().delay(180).queue(function(){
            $(this).parent().find('.w-link').show().dequeue().delay(190).queue(function(){
               $(this).parent().find('.w-img').show().dequeue().delay(200).queue(function(){
                  $(this).parent().find('.w-close').show().dequeue();
               });
            });
         });
      });
   });


   //CLICK ON CLOSE TO CLOSE
   $('.w-close, .w-bio, .w-img, .ad-bg-x').on('click', function(){
      $(this).parent().hide().dequeue();
      $('#artists-deep').hide().dequeue();
      $('.w-bio, .w-link, .w-img, .w-close').hide().dequeue();
   });

   //////// EVENTS //////////
   $('#events-list .event-item').on('click', function(){

      // change events-item
      $(this).css({
         'transform': 'skew(0, 0) scale(1, 1)',
         'transition': 'all .3s ease-in-out',
         'opacity': '1',
      });

      // show info de evento
      $(this).find('.event-deep').css({
         'max-height':'2000px',
      });

   });
}


////////TABLET ONLY
if (matchMedia('screen and (min-width: 601px) and (max-width: 1024px)').matches) {

}
