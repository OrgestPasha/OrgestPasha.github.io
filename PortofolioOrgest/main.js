function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



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