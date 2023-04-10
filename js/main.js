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

/* ------------------------- */

let wizardBar = document.querySelector("[data-wizard-bar]");
let btnPrevious = document.querySelector("[data-btn-previous]");
let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  let formTabs = document.querySelectorAll("[data-form-tab]");
  let wizardItem = document.querySelectorAll("[data-wizard-item]");
  formTabs[n].classList.add("active");
  wizardItem[n].classList.add("active");

  if (n == 0) {
    btnPrevious.style.display = "none";
  } else {
    btnPrevious.style.display = "block";
  }
}

function nextPrev(n) {
  let formTabs = document.querySelectorAll("[data-form-tab]");

  if (n == 1 && !validateForm()) return false;

  formTabs[currentTab].classList.remove("active");
  currentTab = currentTab + n;
  showTab(currentTab);
}

function validateForm() {
  let formTabs,
    formInputs,
    i,
    valid = true;
  formTabs = document.querySelectorAll("[data-form-tab]");
  formInputs = formTabs[currentTab].querySelectorAll("[data-form-input]");
  let formItem = formTabs[currentTab].querySelectorAll("[data-form-item]");

  for (i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value == "") {
      formItem[i].className += " has-error";
      valid = false;
    }
  }
  return valid;
}

function updateWizardBarWidth() {
  const activeWizards = document.querySelectorAll(".wizard-item.active");
  let wizardItem = document.querySelectorAll("[data-wizard-item]");
  const currentWidth =
    ((activeWizards.length - 1) / (wizardItem.length - 1)) * 100;

  wizardBar.style.width = currentWidth + "%";
}

document.querySelector("*").addEventListener("click", function (event) {
  if (event.target.dataset.btnPrevious) {
    let wizardItem = document.querySelectorAll("[data-wizard-item]");
    wizardItem[currentTab].classList.remove("active");
    nextPrev(-1);
    updateWizardBarWidth();
  }
  if (event.target.dataset.btnNext) {
    nextPrev(1);
    updateWizardBarWidth();
  }
});
