/* Please do not delete these credit lines, but all the others you can change. This is a small script which does open a box with a message
in it. Easily put in this script in your <body> section.That's all what you have to do. Now every visitor who visits your page sees that box.
If you have some questions contact me at mayestro@2xs.de */
// 1999 by Christian Maier 1999   http://www.beste-links.de.cx

var max=0;

function textlist()
{

   max=textlist.arguments.length; for (i=0; i<max; i++) this[i]=textlist.arguments[i];
}

tl=new textlist
(
   "pistolshrimp.net is coming"
)

var x=0; pos=0;
var l=tl[0].length;

function textticker()
{
   document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
   if(pos++==l)
   {
      pos=0;
      setTimeout("textticker()",2000);
      x++;
      if(x==max)
      x=0;
      l=tl[x].length;
   } else
   setTimeout("textticker()",507);
}



<!--
document.write("<FORM NAME=\"tickform\">");
document.write("<INPUT TYPE=\"TEXT\" NAME=\"tickfield\" SIZE=\"25\">");
document.write("</FORM>");
textticker();
//-->




$( document ).ready(function() {
   $('#speakers').delay(3000).fadeOut(500);
    setTimeout(textlist,2000);
});



// about



$(document).mousemove(function(e){
   var $width = ($(document).width())/255;
   var $pageX = parseInt(255- e.pageX / $width,10);
   $("#more").css("color", "rgb("+$pageX+","+$pageX+","+$pageX+")");
});


$( document ).ready(function() {

   $('#more').on('click', function() {
      $('#about').slideToggle('fast');
   });

   $('#b-eng').on('click', function() {
      $('#t-eng').fadeIn();
      $('#t-pt').fadeOut();
      $('#b-pt').css({
         'color':'#979797'
      });
      $('#b-eng').css({
         'color':'black'
      });

   });

   $('#b-pt').on('click', function() {
      $('#t-eng').fadeOut();
      $('#t-pt').fadeIn();
      $('#b-eng').css({
         'color':'#979797'
      });
      $('#b-pt').css({
         'color':'black'
      });
   });

   if (matchMedia('only screen and (max-width: 640px)').matches) {


      $('#more').on('click', function() {
         $('#b-eng').css({
            'color':'rgba(255, 255, 255, 1)'
         });
      });


      $('#b-eng').on('click', function() {
         $('#t-eng-m').fadeIn();
         $('#t-pt-m').fadeOut();
         $('#t-pt').hide();
         $('#t-eng').hide();
         $('#b-pt').css({
            'color':'rgba(255, 255, 255, 0.5)'
         });
         $('#b-eng').css({
            'color':'rgba(255, 255, 255, 1)'
         });

      });

      $('#b-pt').on('click', function() {
         $('#t-eng-m').fadeOut();
         $('#t-pt-m').fadeIn();
         $('#t-pt').hide();
         $('#t-eng').hide();
         $('#b-eng').css({
            'color':'rgba(255, 255, 255, 0.5)'
         });
         $('#b-pt').css({
            'color':'rgba(255, 255, 255, 1)'
         });
      });
   }

});
