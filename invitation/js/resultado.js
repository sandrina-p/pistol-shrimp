$(document).ready(function(){

// LOAD RANDOM CONTENT
   var resposta = ["nao", "sim", "cares"];
   /*random class chosen*/
   var chosenValue = resposta[Math.floor(Math.random() * resposta.length)];

   /*function on that class*/
   var chosenDiv = document.getElementById(chosenValue);
   chosenDiv.style.display = "block";

//NAO
   $('#nao .contentor').click (function() {
      $('#alert').slideToggle("fast");
   });

//SIM
   $('#fundo-sim').hover (function() {
      $('.titulo').css({
         'display':'none',
      });
      $('#yes').css({
         'display':'block',
      });
   });

   $('#circle-1').mouseenter (function() {
      $('.titulo').css({
         'display':'none',
      });
      $('#concerto').css({
         'display':'block',
      });
   });

   $('#circle-2').mouseenter (function() {
      $('.titulo').css({
         'display':'none',
      });
      $('#jantar').css({
         'display':'block',
      });
   });

   $('#circle-3').mouseenter (function() {
      $('.titulo').css({
         'display':'none',
      });
      $('#data').css({
         'display':'block',
      });
   });

   $('#circle-4').mouseenter (function() {
      $('.titulo').css({
         'display':'none',
      });
      $('#mapa').css({
         'display':'block',
      });
   });


// NAO
   for(var i = 0; i < 49; i++) {
      $('#sadders').append('<div class="sad">:(</div>');
   }

});
