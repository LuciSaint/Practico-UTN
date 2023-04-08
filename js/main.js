document.addEventListener("DOMContentLoaded", () => {
  var siguiente = document.getElementById("siguiente");
  siguiente.addEventListener("click", () => {
    var contenedor = document.getElementById("carouselImg");
    var elementoActivo = contenedor.querySelector(".activo");
    var elementoSiguiente = contenedor.querySelector(".activo + .inactivo")
    if(elementoSiguiente === null){
      elementoSiguiente = contenedor.querySelector(".inactivo:first-of-type");
    }

    elementoActivo.classList.remove("activo");
    elementoActivo.classList.add("inactivo");

    elementoSiguiente.classList.remove("inactivo");
    elementoSiguiente.classList.add("activo");
  });

  var anterior = document.getElementById("anterior");
  anterior.addEventListener("click", () => {
      var contenedor = document.getElementById("carouselImg");
      var elementosActivables = contenedor.querySelectorAll(".activo, .inactivo");

      for(var i = 0; i < elementosActivables.length; i++){
        if(elementosActivables[i].classList.contains("activo") === true){
          /* console.log("El elemento activo esta en la posicion: " + i); */
          break;
        }
          
      }
      
      var posicionElementoAnterior = i-1;
      if(posicionElementoAnterior === -1){
      posicionElementoAnterior = elementosActivables.length -1;
    }
      
      elementosActivables[i].classList.remove("activo"); //Desactivo elemento activo actual
      elementosActivables[i].classList.add("inactivo");

      elementosActivables[posicionElementoAnterior].classList.remove("inactivo"); //Activo elemento anterior
      elementosActivables[posicionElementoAnterior].classList.add("activo");
  });
  
});


/* const carouselImg = document.querySelector('.carouselImg');
const carouselImgCount = document.querySelectorAll('.carouselImg img').length;

let imageIndex = 0;
const imageWidth = carouselImg.clientWidth;

function moveCarousel() {
  carouselImg.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
}

setInterval(() => {
  if (imageIndex === carouselImgCount - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  moveCarousel();
}, 3000); */