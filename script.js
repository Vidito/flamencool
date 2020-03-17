function ClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");

  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Get the modal
var modal = document.getElementById("modal");

// close the model if there is a click outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
