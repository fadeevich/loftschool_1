var addProjectLink = document.querySelector(".add");
var addProjectPopup = document.querySelector(".modal-window");
var addProjectClose = document.querySelector(".modal-window-btn-close");
var bodyDark = document.getElementById("body");

addProjectLink.addEventListener("click", function(e) {
	e.preventDefault();
	addProjectPopup.classList.add("modal-window-show");
	bodyDark.setAttribute("class", "body-darken");
});

addProjectClose.addEventListener("click", function(e) {
	e.preventDefault();
	addProjectPopup.classList.remove("modal-window-show");
	bodyDark.classList.remove("body-darken")
});