
window.onload=function() {
   // setTimeout(function(){
   //    $('#keyboard').css({
   //       'visibility':'visible',
   //    });
   // },2500);

   setTimeout(function(){
      $('main').show();
   },2000);
}

$( document ).ready(function() {

   $("body").keydown(function( event ) {
      if ( event.which == 65 || event.which == 83 || event.which == 68 || event.which == 70 || event.which == 71 || event.which == 72 || event.which == 74 || event.which == 75 || event.which == 76 ) {
        $('main').hide();
        $('#downloadd').show();

      }
   });

   $("body").keydown(function( event ) {
      if ( event.which == 27 ) {
       window.location = "http://pistolshrimp.net";
      }
   });

   if ($('.p5_hidden').css('visibility') === 'hidden') {

      $('main').css('visibility','visible');

   } else {



      // $('loading').css('visibility','hidden');
   }

});
