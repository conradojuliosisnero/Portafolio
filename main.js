const btnFijo = document.querySelector('.btn__fijo');
const nav = document.querySelector('.navegador');
const swich = document.querySelector('.swich');

swich.addEventListener('click',()=>{
  swich.classList.toggle('active');
  document.body.classList.toggle('modo-oscuro');
  nav.classList.toggle('nav-dark');
  btnFijo.classList.toggle('boton-dark');

  if (document.body.classList.contains('modo-oscuro')) {
    localStorage.setItem('dark','true')
  } else{
    localStorage.setItem('dark','false')
  }
})

if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('modo-oscuro');
  nav.classList.add('nav-dark');
  swich.classList.add('active');
}else{
  document.body.classList.remove('modo-oscuro');
  nav.classList.remove('nav-dark');
  swich.classList.remove('active');

}



