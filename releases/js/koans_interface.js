/*jslint browser: true*/
/*global $, jQuery, alert*/

// convenience function to get the id attribute of generated sketch html element


function getProcessingSketchId() {
    "use strict";
    return 'ambientesdumasprocessing';
}



$(document).ready(function(){
   $('body').click (function(){

      // DESAPARECE TIP
      $('#vissuals').hide();

      $('#aaa').css('visibility','visible');
      $('#doubleu').css('visibility','visible');
      $('#dee').css('visibility','visible');


      //PARA O A
      $("body").keydown(function( event ) {
         if ( event.which == 65 ) {
           $("#aaa").css({
             backgroundColor: 'white',
             color: 'black'
           });
         }
      });

      $("body").keyup(function( event ) {
         if ( event.which == 65 ) {
            $("#aaa").css({
              backgroundColor: 'black',
              color: 'white'
            });
         }
      });

      //PARA O W
      $("body").keydown(function( event ) {
         if (event.which == 87) {
           $("#doubleu").css({
             backgroundColor: 'white',
             color: 'black'
           });
         }
      });

      $("body").keyup(function( event ) {
         if ( event.which == 87 ) {
            $("#doubleu").css({
              backgroundColor: 'black',
              color: 'white'
            });
         }
      });


      //PARA O D
      $("body").keydown(function( event ) {
         if ( event.which == 68 ) {
           $("#dee").css({
             backgroundColor: 'white',
             color: 'black'
           });
         }
      });

      $("body").keyup(function( event ) {
         if ( event.which == 68 ) {
            $("#dee").css({
              backgroundColor: 'black',
              color: 'white'
            });
         }
      });

      $("body").keydown(function( event ) {
         if ( event.which == 27 ) {
          window.location = "http://pistolshrimp.net";
         }
      });
      
      //SHOW DOWNLOAD

      var fase = 0;

      $("body").keydown(function( event ) {
         if (event.which == 68) {
            fase += 1;

            if (fase == 2 ) {
               $("#link-down a").css({
                  display: 'block',
               });
            }else if (fase > 3 ) {
               fase=0;
               $("#link-down a").css({
                  display: 'none',
               });

            } else {
               $("#link-down a").css({
                  display: 'none',
               });
            }
         }
      });

      $('#link-down').click (function(){
         $(this).css({
            'display': 'none !important',
         });
      });

      $('#koantitulo').hover (function(){
         $('#koanmean').fadeIn(0);

      },function(){
         $('#koanmean').fadeOut(0);
      });

   });
});
