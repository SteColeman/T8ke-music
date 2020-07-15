var navToggle = document.getElementById("jsNavBarToggle");

var navList = document.getElementById("jsMenu");

navToggle.addEventListener("click", navShowHide);


function navShowHide() {
  navList.classList.toggle("hidden");

}
