//SHOW TIP ON FIRST CLICK ONLY
// var clicks=0;
// $(document).click(function(e){
//     if(clicks == 0){
//       $('.tip').show(0);
//     }else{
//       $('.tip').hide(0);
//     }
//     ++clicks;
// });


// var divPos = {};
// var offset = $("#divid").offset();
// $(document).mousemove(function(e){
//     divPos = {
//         left: e.pageX - offset.left,
//         top: e.pageY - offset.top
//     };
// });


// $(document).click (function(){
//    $('.tip').slideToggle('fast');
// });



/* Please do not delete these credit lines, but all the others you can change. This is a small script which does open a box with a message
in it. Easily put in this script in your <body> section.That's all what you have to do. Now every visitor who visits your page sees that box.
If you have some questions contact me at mayestro@2xs.de */
// 1999 by Christian Maier 1999   http://www.beste-links.de.cx
<!-- begin
var max=0;
function textlist()
{
   max=textlist.arguments.length; for (i=0; i<max; i++) this[i]=textlist.arguments[i];
}
tl=new textlist
(
   "pistolshrimp.net is coming" // Geben Sie hier den zu scrollenden Text ein
);
var x=0; pos=0;
var l=tl[0].length;
function textticker()
{
   document.tickform.tickfield.value=tl[x].substring(0,pos)+"_";
   if(pos++==l)
   {
      pos=0;
      setTimeout("textticker()",1000);
      x++;
      if(x==max)
      x=0;
      l=tl[x].length;
   } else
   setTimeout("textticker()",50);
}


<!--
document.write("<FORM NAME=\"tickform\">");
document.write("<INPUT TYPE=\"TEXT\" NAME=\"tickfield\" SIZE=\"25\">"); // Bei SIZE können Sie die Größe des Feldes ändern
document.write("</FORM>");
textticker();
//-->
