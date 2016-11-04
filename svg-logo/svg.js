$(document).ready(function() {
   // $('nav ul li:nth-child(1)').delay(000).fadeIn(1000);
   // $('nav ul li:nth-child(2)').delay(100).fadeIn(1000);
   // $('nav ul li:nth-child(3)').delay(200).fadeIn(1000);
   // $('nav ul li:nth-child(4)').delay(300).fadeIn(1000);

//cabeca
   $('#filler svg #cabeca').hover (function(){
      // $(this).css({
      //    'opacity':'0',
      // });
   }, function() {
      // $(this).css({
      //    'opacity':'1',
      // });
   });

//corpo1 e corpo 2
   $('#filler svg #corpo1, #filler svg #corpo2').hover (function(){
      $('#filler svg #corpo1, #filler svg #corpo2').css({
         'opacity':'0',
      });
      $('#topics').empty().append('About').hide().fadeIn(300);
   }, function() {
      $('#filler svg #corpo1, #filler svg #corpo2').css({
         'opacity':'1',
      });
      $('#topics').empty().append('Pistol Shrimp').hide().fadeIn(300);

   });

//corpo3 e corpo4
   $('#filler svg #corpo3, #filler svg #corpo4').hover (function(){
      $('#filler svg #corpo3, #filler svg #corpo4').css({
         'opacity':'0',
      });
      $('#topics').empty().append('Artists').hide().fadeIn(300);

   }, function() {
      $('#filler svg #corpo3, #filler svg #corpo4').css({
         'opacity':'1',
      });
      $('#topics').empty().append('Pistol Shrimp').hide().fadeIn(300);

   });

//corpo5 e cauda
   $('#filler svg #corpo5, #filler svg #cauda').hover (function(){
      $('#filler svg #corpo5, #filler svg #cauda').css({
         'opacity':'0',
      });
      $('#topics').empty().append('Releases').hide().fadeIn(300);

   }, function() {
      $('#filler svg #corpo5, #filler svg #cauda').css({
         'opacity':'1',
      });
      $('#topics').empty().append('Pistol Shrimp').fadeIn(300);


   });

//corpo5 e cauda
   $('#filler svg #arm, #filler svg #mao, #filler svg #pinca').hover (function(){
      $('#filler svg #arm, #filler svg #mao, #filler svg #pinca').css({
         'opacity':'0',
      });
      $('#topics').empty().append('Random').hide().fadeIn(300);

   }, function() {
      $('#filler svg #arm, #filler svg #mao, #filler svg #pinca').css({
         'opacity':'1',
      });
      $('#topics').empty().append('Pistol Shrimp').hide().fadeIn(300);

   });
});
