

$(document).ready(function(){


   $('body').keydown(function( event1 ) {
      if ( event1.which == 81) { //Q
         $('.autor').hide();
         $('#autor1').show();
      }
      if ( event1.which == 87) { //W
         $('.autor').hide();
         $('#autor2').show();
      }
      if ( event1.which == 69) { //E
         $('.autor').hide();
         $('#autor3').show();
      }
      if ( event1.which == 82) { //R
         $('.autor').hide();
         $('#autor4').show();
      }
      if ( event1.which == 84) { //T
         $('.autor').hide();
         $('#autor5').show();
      }
      if ( event1.which == 89) { //Y
         $('.autor').hide();
         $('#autor6').show();
      }
      if ( event1.which == 80) { //P
         $('.autor').hide();
         $('#autor7').show();
      }
   });

});

//PARA O Q
$("body").keydown(function( event ) {
   if ( event.which == 81) {
     $(".keyss:nth-of-type(2)").css({
       backgroundColor: 'white',
       color: 'black'
     });
   }
});

$("body").keyup(function( event ) {
   if ( event.which == 81) {
      $(".keyss:nth-of-type(2)").css({
         backgroundColor: 'black',
        color: 'white'
      });
   }
});


//PARA O W
$("body").keydown(function( event ) {
   if ( event.which == 87 ) {
     $(".keyss:nth-of-type(3)").css({
        backgroundColor: 'white',
        color: 'black'
     });
   }
});

$("body").keyup(function( event ) {
   if ( event.which == 87 ) {
      $(".keyss:nth-of-type(3)").css({
         backgroundColor: 'black',
        color: 'white'
      });
   }
});

//PARA O E
$("body").keydown(function( event ) {
   if ( event.which == 69 ) {
     $(".keyss:nth-of-type(4)").css({
        backgroundColor: 'white',
        color: 'black'
     });
   }
});

$("body").keyup(function( event ) {
   if ( event.which == 69 ) {
      $(".keyss:nth-of-type(4)").css({
         backgroundColor: 'black',
        color: 'white'
      });
   }
});

//PARA O R
$("body").keydown(function( event ) {
   if ( event.which == 82 ) {
     $(".keyss:nth-of-type(5)").css({
        backgroundColor: 'white',
        color: 'black'
     });
   }
});

$("body").keyup(function( event ) {
   if ( event.which == 82 ) {
      $(".keyss:nth-of-type(5)").css({
         backgroundColor: 'black',
        color: 'white'
      });
   }
});

//PARA O T
$("body").keydown(function( event ) {
   if ( event.which == 84 ) {
     $(".keyss:nth-of-type(6)").css({
        backgroundColor: 'white',
        color: 'black'
     });
   }
});

$("body").keyup(function( event ) {
   if ( event.which == 84 ) {
      $(".keyss:nth-of-type(6)").css({
         backgroundColor: 'black',
        color: 'white'
      });
   }
});

//PARA O Y
$("body").keydown(function( event ) {
   if ( event.which == 89 ) {
     $(".keyss:nth-of-type(7)").css({
        backgroundColor: 'white',
        color: 'black'
     });
   }
});

$("body").keyup(function( event ) {
   if ( event.which == 89 ) {
      $(".keyss:nth-of-type(7)").css({
        backgroundColor: 'black',
        color: 'white'
      });
   }
});
