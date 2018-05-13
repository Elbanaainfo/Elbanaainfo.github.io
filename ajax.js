$(document).ready(function() {

	// Selectors Vars
	var sender				= $(".sender"),
		result				= $(".result"),
		loader				= $("#loader")

	// Fading Time
	var fadingTime			= 1000,
		resultShowTime		= 4000;

	

	// Send Mail with Ajax
		$('#Form').submit( function(e) {
		e.preventDefault();
		var data = new FormData(this);
		$.ajax({
			url: "mail/envoyer.php",
			type: "post",
			data: data,
			cache: false,
            contentType: false,
            processData: false,
			beforeSend: function() {
				$('.sender').hide(1000);
    			 $('#loader').fadeIn(1000);
				 
  			},
 			 complete: function(){
    		 $('#loader').hide();
  			},
			success: function(data){
				sender.fadeOut(fadingTime, function(){
					result.fadeIn(fadingTime, function() {
						$(this).delay(resultShowTime).fadeOut(fadingTime, function(){
							sender.fadeIn();
						});
					});
				});
				
			},
			error: function(){

			}
		});
		
	});



});

$(function(){  
    $(".btn-finish").click(function(){ 
		document.getElementById("wid").style.width = "100%";
});
});
