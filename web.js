document.addEventListener("mousemove",pallarax);

function pallarax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    
    const x =(window.innerWidth - e.pageX*speed)/100
    const y =(window.innerHeight - e.pageY*speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


// libreria
window.sr = ScrollReveal();

// navegador
sr.reveal(".nombre", {
  duration: 2000,
  origin: "left",
  distance: "1000px",
});

