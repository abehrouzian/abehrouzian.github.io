$(document).ready(function(){
	
//CLICKING HOME
	$('#home_button').click(function(){
		$('html body').animate({'scrollTop': $('body').offset().top}, 500);
		$(".menu_item").css("color", "white"); 

	});


//CLICKING ABOUT
	$('#about_button').click(function(){
		$('html body').animate({'scrollTop': $('#intro-container').offset().top}, 500);
		$(".menu_item").css("color", "black"); 

	});


//CLICKING INTERESTS
	$('#interests_button').click(function(){
		$('html body').animate({'scrollTop': $('#about_container').offset().top}, 500);
		$(".menu_item").css("color", "black"); 
	});


//CLICKING RESUME
	$('#resume_button').click(function(){
		$('html body').animate({'scrollTop': $('#resume_container').offset().top}, 500);
		$(".menu_item").css("color", "black"); 
	});



// POLITICS ICON HOVER CAPABILITIES 

	$("#politics").hover(function(){ 
 		$("#p_desc").css("display", "block"); 

 	});

 	$("#law").hover(function(){ 
 		$("#p_desc").css("display", "none"); 

 	});

 	$("#sustainability").hover(function(){ 
 		$("p_desc").css("display", "none"); 

 	});

 // LAW ICON HOVER CAPABILITIES
	
	$("#law").hover(function(){ 
 		$("#l_desc").show(); 

 	});

 	$("#politics").hover(function(){ 
 		$("#l_desc").hide(); 

 	});

 	$("#sustainability").hover(function(){ 
 		$("#l_desc").hide(); 

 	});

 // SUSTAINABILITY ICON HOVER CAPABILITIES


 	$("#sustainability").hover(function(){ 
 		$("#s_desc").css("display", "block"); 

 	});

 	$("#politics").hover(function(){ 
 		$("s_desc").css("display", "none"); 

 	});

 	$("#law").hover(function(){ 
 		$("#s_desc").css("display", "none"); 

 	});

//DISPLAY: NONE CAPABILITIES

	$("#about_container").hover(function(){ 
 		$(".desc").css("display", "none"); 

 	});
});