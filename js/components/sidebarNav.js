$( document ).ready(function() {

	$("#nc-sidebarNav--stateSwitcher").click(function() {

		  $(".fa-times").toggleClass('fa-bars') 
		  $(".nc-sidebarNav__listItem").toggleClass('nc-sidebarNav__listItem--hidden') 
		  $(".nc-sidebarNav").toggleClass('nc-sidebarNav--collapsed')  
		  $(".container").toggleClass('container--expanded')  

	});
	 
});


