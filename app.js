//Event Listener = binding a click event 

$(document).ready(function(){
//this is the fuctionyou write at the beginning of your javascript file, so that all of the html loads before your javascript runs
//var = variable / a container	
	var score = 0;
	$("#increase-5").on("click", function(){
		score +=5;
		$("#score").html(score)
	});
	
	$("#decrease-5").on("click", function(){
		score -=5;
		$("#score").html(score)
	});

	$("#submit-custom-score").on("click",function(){
		var customScore = parseInt($("#custom-score").val());
		score = customScore;
		$("#score").html(score);

	});



	
});





