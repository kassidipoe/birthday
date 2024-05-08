document.addEventListener("DOMContentLoaded", function () {
	const card = document.getElementById("card");
	const outside = document.getElementById("outside");
  
	card.addEventListener("click", function () {
	  outside.classList.toggle("open");
	});
  });
  