const luna = document.querySelector('.luna');
const sol = document.querySelector('.sol');
const btnFijo = document.querySelector('.btn__fijo');
const nav = document.querySelector('.navegador');

luna.addEventListener('click',()=>{
  document.body.classList.toggle('modo-oscuro');
  nav.classList.toggle('nav-dark');
  btnFijo.classList.toggle('boton-dark');
  // sol.style.display='block';
})

sol.addEventListener('click',()=>{
  document.body.classList.toggle('modo-claro');
  nav.classList.toggle('nav-white');
  btnFijo.remove.classList('boton-dark');
  // luna.style.display='block';
})



