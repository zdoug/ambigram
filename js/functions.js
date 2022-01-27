window.onload = function() {
  let buttonMenu = document.querySelector("#menu");
  buttonMenu.addEventListener("click", function(){
    this.firstChild.classList.toggle("open");
  });

}

document.onkeydown = downSection;

function downSection(e) {
  if (e.key == 'ArrowDown') {
    var elementHeight = document.querySelector("main").clientHeight;
    window.scrollTo({
      top: elementHeight,
      behavior: 'smooth'
    });
  }
}
