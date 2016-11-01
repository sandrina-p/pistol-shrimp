// external js: draggabilly.pkgd.js

$(document).ready (function() {
if (matchMedia('screen and (min-device-width: 1025px)').matches) {

   var $draggable = $('.draggable').draggabilly({
      handle: '.handle'
   });

   var posit = 3;



   $('.draggable').mousedown (function(){
      $(this).css({
         'z-index': + posit
      });
      posit++;


   });
// });


// drag size
// $(document).ready( function() {

   interact('.resize-drag')
   .draggable({
      onmove: window.dragMoveListener
   })
   .resizable({
      edges: { left: false, right: true, bottom: true, top: false }
   })
   .on('resizemove', function (event) {
      var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0),
      y = (parseFloat(target.getAttribute('data-y')) || 0);

      // update the element's style
      target.style.width  = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      // translate when resizing from top or left edges
      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.webkitTransform = target.style.transform =
      'translate(' + x + 'px,' + y + 'px)';

      // target.setAttribute('data-x', x);
      // target.setAttribute('data-y', y);
      // target.textContent = event.rect.width + '×' + event.rect.height;
   });
}
});
