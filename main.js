



let changeIcon= function(icon){
	document.body.classList.toggle("light-theme");

	if (icon.classList.contains("fa-moon")) {
		 icon.classList.remove('fa-moon');		
		icon.classList.toggle("fa-sun");


	}
	else{
		icon.classList.remove('fa-sun');		
		icon.classList.toggle("fa-moon");
		


	}
	

}