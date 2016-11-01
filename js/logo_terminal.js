/*global RealisticTypewriter, document*/

"use strict";

function prompt(element, text) {
   var span = document.createElement("span");
   span.innerHTML = text;
   element.appendChild(span);
}

function start() {
   var realisticTypewriter = new RealisticTypewriter(),
   typeWriterElement = document.getElementById("typewriter");

   prompt(typeWriterElement, "..................................................<br/><br/>");

   // OK, I know the code could look better, but this is just a quick example
   setTimeout(function () {
      // SOLETRADO
      realisticTypewriter.type("Pistol Shrimp", typeWriterElement, function () {
         prompt(typeWriterElement, "<br/>");

         setTimeout(function () {
            // DIRECTO
            realisticTypewriter.type("is an internet based", typeWriterElement, function () {
               prompt(typeWriterElement, "<br/>");
               // SOLETRADO
               realisticTypewriter.type("record label that focuses", typeWriterElement, function () {

                  // setTimeout(function () {
                  //    prompt(typeWriterElement, "<br/>");
                  //    prompt(typeWriterElement, "that focuses on free, interactive");
                  prompt(typeWriterElement, "<br/>");
                  // SOLETRADO
                  realisticTypewriter.type("on free, interactive", typeWriterElement, function () {

                     setTimeout(function () {
                        prompt(typeWriterElement, "<br/>");
                        realisticTypewriter.type("music distribution.", typeWriterElement, function () {

                           // setTimeout(function () {
                           //    prompt(typeWriterElement, "<br/><br/>");
                           //    realisticTypewriter.type("use the keys [0] [1] [2] [3] [4]", typeWriterElement, function () {
                           //       setTimeout(function () {
                           //          prompt(typeWriterElement, "<br/>");
                           //          realisticTypewriter.type("in order to navigate", typeWriterElement, function () {
                           //             setTimeout(function () {
                           //                prompt(typeWriterElement, "<br/><br/>");
                           //                realisticTypewriter.type("your password is:", typeWriterElement, function () {
                           //                   setTimeout(function () {
                           //                      prompt(typeWriterElement, "<br/>");
                           //                      realisticTypewriter.type("pistolshrimp", typeWriterElement, function () {
                                                   setTimeout(function () {
                                                      prompt(typeWriterElement, "<br/><br/>");
                                                      realisticTypewriter.type("[and yes,", typeWriterElement, function () {
                                                         setTimeout(function () {
                                                            prompt(typeWriterElement, "<br/>");
                                                            realisticTypewriter.type("our logo reacts to sound]", typeWriterElement, function () {
                                                            });
                                                         }, 500);
                                                      });
                                                   }, 2000);
                           //                      });
                           //                   }, 500);
                           //                });
                           //             }, 500);
                           //          });
                           //       }, 500);
                           //    });
                           // }, 500);
                        });
                     }, 500);
                  }, 500);
               });
            });
         }, 500);
      });
   }, 1500);
}

var readyStateCheckInterval = setInterval(function () {
   if (document.readyState === "complete") {
      start();
      clearInterval(readyStateCheckInterval);
   }
}, 10);
