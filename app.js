// console.log("js works!");

$(document).ready(function(){

	// console.log("document ready works");

	$.ajax('data.json', {
        success: function(response){
        	$.each(response, function(index, response){
        		$('body').append("<div class=newDiv></div>")
		            var msg = $("<p></p>").css("background-color", response.color);
		           	msg.append("Color: " + response.color);
		            msg.append("<br>Value: " + response.value);
		            $('body').append(msg);
	        });
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

});//end document ready

//Type this into terminal AT THE FOLDER YOU ARE ACCESSING if you need to localize server --> python -m SimpleHTTPServer 8080
//THEN open a new tab in chrome and navigate to http://127.0.0.1:8080

