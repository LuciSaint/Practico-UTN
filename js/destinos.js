const cuadros = document.querySelectorAll('.cuadro');
const informacionesOcultas = document.querySelectorAll('.oculto');

function ocultarTodaLasInformaciones() {
    informacionesOcultas.forEach((informacionOculta) => {
        informacionOculta.classList.remove('mostrar');
  });
}

function mostrarInformacion(cuadro, contenido) {
  cuadro.addEventListener('click', () => {
    ocultarTodaLasInformaciones();
    contenido.classList.toggle('mostrar');
    contenido.scrollIntoView({behavior: 'smooth'});

  });
}

for (let i = 0; i < cuadros.length; i++) {
  const cuadro = cuadros[i];
  const informacionOculta = informacionesOcultas[i];
  mostrarInformacion(cuadro, informacionOculta);
}