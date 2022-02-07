
var menuBar = document.getElementsByClassName("sandwich")[0];
var options = document.querySelector(".menu-options");
var smooth = document.querySelector(".smoothscroll");

menuBar.addEventListener("click", function(){
    options.classList.toggle("change");
}, false);

options.addEventListener("click", function(){
    this.classList.toggle("change");
}, false);

window.scroll({
  top: 1000, // Captura a distancia do topo onde deseja ser rolado
  left: 0,// Faz o mesmo do top mas em um ambito horizontal
  behavior: 'smooth' // Aqui eh onde vem toda a magica, ele suporta duas opcoes, o `smooth` e o `normal`
})

const go = (elem) => {
  window.scroll({       // 1
      top: document
    .querySelector( elem )
      .offsetTop,       // 2
      left: 0,
      behavior: 'smooth'// 3
   });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    smooth.style.display = "block";
  } else {
    smooth.style.display = "none";
  }
}