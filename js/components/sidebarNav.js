$( document ).ready(function() {

	$("#nc-sidebarNav--stateSwitcher").click(function() {

		  $(".fa-times").toggleClass('fa-bars') 
		  $(".nc-sidebarNav__listItem").toggleClass('nc-sidebarNav__listItem--hidden') 
		  $(".nc-sidebarNav").toggleClass('nc-sidebarNav--collapsed')  
		  $(".container").toggleClass('container--expanded')  

	});

	$( window ).resize(function() {
  		

  		var defaultWidth = 890;
  		var newWidth = parseInt($(window).width(),10);

  		if (newWidth < 890)
  			console.log("let's do work!!!!!")
  			var difference = newWidth - defaultWidth;
  			console.log(difference)
  			var loginRight = 20 
  			var incrementRight = -330 + difference  	

  			$(".login").css("right", incrementRight);
	});
	 
});


