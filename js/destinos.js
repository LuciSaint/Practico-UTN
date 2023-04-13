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

var map2 = L.map('mapRio').setView([-22.90642, -43.18223], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map2);

  var marker = L.marker([-22.90642, -43.18223]).addTo(map2);

  var map1 = L.map('mapBari').setView([-41.134258, -71.308525], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map1);

  var marker = L.marker([-41.134258, -71.308525]).addTo(map1);

  var map3 = L.map('mapNY').setView([40.71427, -74.00597], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map3);

  var marker = L.marker([40.71427, -74.00597]).addTo(map3);
