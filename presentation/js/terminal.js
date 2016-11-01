$(document).ready(function(){

   $('body').keydown(function( event1 ) {
      if ( event1.which == 48) { //0
         window.location = "pres_0.html";
      }
      if ( event1.which == 49) { //1
         window.location = "pres_1.html";
      }
      if ( event1.which == 50) { //2
         window.location = "pres_2.html";
      }
      if ( event1.which == 51) { //3
         window.location = "pres_3.html";
      }
      if ( event1.which == 52) { //4
         window.location = "invitation.html";
      }
   });

});
