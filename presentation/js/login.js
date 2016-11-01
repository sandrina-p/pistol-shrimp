$(document).ready(function() {

    var attempt = 3; //Variable to count number of attempts

    document.getElementById('password').onkeypress = function(e){
        if (!e) e = window.event;
        if (e.keyCode == '13'){

            var password = document.getElementById("password").value;

            //IF CORRECT
            if (password == "pistolshrimp"){

                $('.yes').css({
                    'display': 'block'
                });
                
                $('.yes2').css({
                    'display': 'block'
                });
                
                $('.no').css({
                    'display': 'none'
                });
                
                $('.no2').css({
                    'display': 'none'
                });

                return false;
            }

            //IF NOT
            else{
                
                $('.no').css({
                    'display': 'block'
                });
                
                $('.no2').css({
                    'display': 'block'
                });
                
                $('.yes').css({
                    'display': 'none'
                });
                
                $('.yes2').css({
                    'display': 'none'
                });
                
                return false;
            }
        }
    }


    $("input#submit").click(function () {
      $("input").effect("shake", { times:3 }, 300);
    })

});
