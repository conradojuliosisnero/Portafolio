const nav = document.querySelector('.navegador');
const modoDark = document.querySelector('.swich');
const btnFijo = document.querySelector('.btn__fijo');

modoDark.addEventListener('click',()=>{
  document.body.classList.toggle('modo-oscuro');
  nav.classList.toggle('nav-dark');
  btnFijo.classList.toggle('boton-dark');
  modoDark.classList.toggle('active');
  // modo guardado en localstorage 

  if (document.body.classList.contains('modo-oscuro')) {
      localStorage.setItem('oscuro','true');
  }else{
    localStorage.setItem('oscuro','false');
  }
});

// comprovacion del localstore 

if (localStorage.getItem('oscuro') === 'true') {
  document.body.classList.add('modo-oscuro');
  nav.classList.add('nav-dark');
  btnFijo.classList.add('boton-dark');
  modoDark.classList.add('active');
} else{
  document.body.classList.remove('modo-oscuro');
  nav.classList.remove('nav-dark');
  btnFijo.classList.remove('boton-dark');
  modoDark.classList.remove('active');

}


