$(document).ready(function() {

// Original or Colourful etch-a-sketch?


    $(".btn-toggle-colors").on("click", function() {
        if($(this).hasClass("btn-toggle-on")) {
            $(this).removeClass("btn-toggle-on").addClass("btn-toggle-off");
        } else {
            $(this).addClass("btn-toggle-on").removeClass("btn-toggle-off");
        }
    });



// Establish the basics by getting rows, columns, width


    // Validation of input
    $("#sketch-form").validate({
        submitHandler: function() {
            
            // Scroll to container
            
            $('html, body').animate({
                scrollTop: $("#canvas-container").offset().top
            }, 500);

            // Sizing
            
            var rows = 0;
            var columns = 0;
            var width;
            var rowsCount = 0;
            var columnsCount = 0;

            rows = parseInt($("#rows").val(), 10);
            columns = parseInt($("#columns").val(), 10);


            if($("#width").val() == "") {
              width = 960;
            } else {
              width = parseInt($("#width").val(), 10);
            }

            var boxSize = (width / columns);


            // Create the grid
       
            while(rowsCount !== rows) {
                for(i = 0; i < columns-1; i++) {
                    $(".container").append("<div class='column box'></div>");
                }
                    $(".container").append("<div class='column box'></div><br/>");
                    rowsCount = rowsCount + 1;
                    $(".container").css("width", width);
                    $(".column").css("width", boxSize);
                    $(".column").css("height", boxSize);
            }

            // Regular trail

            if ($(".btn-toggle-colors").hasClass("btn-toggle-off")) {
                $(".box").mouseenter(function() {
                    $(this).css("background", "black");
                });
                $(".box").mouseleave(function() {
                    if($(this).hasClass("roundTwo")){
                        $(this).css({"background" : "black", "opacity" : 1});
                    } else {
                        $(this).fadeTo(200, 0.8);
                        $(this).fadeTo(200, 0.7);
                        $(this).fadeTo(200, 0.6);
                        $(this).fadeTo(200, 0.5);
                        $(this).addClass("roundTwo");
                    }
                });
            };

            // Color trail

            if ($(".btn-toggle-colors").hasClass("btn-toggle-on")) {
                // Give me some random colours
                    function randColor() {
                        var red = Math.floor((Math.random() * 255) + 1);
                        var green = Math.floor((Math.random() * 255) + 1);
                        var blue = Math.floor((Math.random() * 255) + 1);
                        
                        return "rgb(" + red + "," + green + "," + blue + ")";
                    }

                $(".box").mouseenter(function() {
                    $(this).css("background", randColor());
                });
            }; // End of color trail
        return false;
    } // End of submitHandler
}); // End of input validation




// Clear the canvas space

    $(".clearGrid").on("click", function() {
        $(".container").empty();
        $("#rows").val("");
        $("#columns").val("");
        $("#width").val("");

        if($(".btn-toggle-colors").hasClass("btn-toggle-on")) {
            $(".btn-toggle-colors").removeClass("btn-toggle-on").addClass("btn-toggle-off");
        }

    });




}); // End of document ready







