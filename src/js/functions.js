window.addEventListener('load', function(){

  // Toggle Menu
  let buttonMenu = document.querySelector("#menu");
  buttonMenu.addEventListener("click", function(){
    this.classList.toggle("menu-open");
    console.log(this);
  });

  // WOW Plugin Call
  new WOW().init();

  // Cookies Init
  Cookies.init();

});