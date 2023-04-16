//Wizard


  let wizardBar = document.querySelector('[data-wizard-bar]')
  let btnPrevious = document.querySelector('[data-btn-previous]')
  let btnNext = document.querySelector('[data-btn-next]')
  let currentTab = 0;
  var fieldsets = document.getElementsByTagName('fieldset'); /* lo movi desde la funcion showTab(n) */
  showTab(currentTab);



  function showTab(n) {
    let formTabs = document.querySelectorAll('[data-form-tab]');
    let wizardItem = document.querySelectorAll('[data-wizard-item]')
    var btnSubmit = document.getElementById('btnSubmit');  
    formTabs[n].classList.add('active')
    wizardItem[n].classList.add('active')
    

    if (n == 0) {
      btnPrevious.style.display = "none";
      btnSubmit.style.display = "none";
    } 
      else if (n == fieldsets.length - 1) {
        btnNext.style.display = "none";
        btnSubmit.style.display = "inline-block";
      }

      else if (n == fieldsets.length - 2) {
        btnNext.style.display = "inline-block";
        btnSubmit.style.display = "none";
      }  
      
      else {
        btnPrevious.style.display = "block";
        btnSubmit.style.display = "none";
      }
  }

  function nextPrev(n) {
    let formTabs = document.querySelectorAll('[data-form-tab]');

    if (n == 1 && !validateForm()) return false;

    formTabs[currentTab].classList.remove('active')
    currentTab = currentTab + n;
    showTab(currentTab);
  }


  function validateForm() {
    let formTabs, formInputs, i, valid = true;
    formTabs = document.querySelectorAll('[data-form-tab]');
    formInputs = formTabs[currentTab].querySelectorAll('[data-form-input]');
    let formItem = formTabs[currentTab].querySelectorAll('[data-form-item]');
  
    for (i = 0; i < formInputs.length; i++) {
      if ((!formInputs[i].checkValidity()) ||  formInputs[i].value == "") { // use checkValidity()
        formItem[i].className += " has-error";
        valid = false;
      }
    }
    return valid;
  }


  
  function updateWizardBarWidth() {
    const activeWizards = document.querySelectorAll(".wizard-item.active");
    let wizardItem = document.querySelectorAll('[data-wizard-item]')
    const currentWidth = ((activeWizards.length - 1) / (wizardItem.length - 1)) * 100;

    wizardBar.style.width = currentWidth + "%";
  }
  
/* minimos y maximos en inputs de type=date */

document.querySelector('*').addEventListener('click', function() {
  returnDate.min = departureDate.value;
});

birth.max = new Date().toISOString().split("T")[0];
departureDate.min = new Date().toISOString().split("T")[0];
returnDate.min = new Date().toISOString().split("T")[0];

/* ////// */

document.querySelector('*').addEventListener('click', function (event) {
  if (event.target.dataset.btnPrevious) {
    let wizardItem = document.querySelectorAll('[data-wizard-item]')
    wizardItem[currentTab].classList.remove('active')
    nextPrev(-1)
    updateWizardBarWidth()
  }
  if (event.target.dataset.btnNext) {
    nextPrev(1)
    updateWizardBarWidth()
  }
  
})


document.querySelector('*').addEventListener('click', function lastStep() {
  if (currentTab === fieldsets.length - 1) {
    console.log('Este es el ultimo paso!')
    /* datos viaje */
    var resumenDestino = document.getElementById('resumenDestino');
    resumenDestino.textContent = document.getElementById('destination').value;
    var resumenFechaSalida = document.getElementById('resumenFechaSalida');
    resumenFechaSalida.textContent = document.getElementById('departureDate').value;
    var resumenFechaRegreso = document.getElementById('resumenFechaRegreso');
    resumenFechaRegreso.textContent = document.getElementById('returnDate').value;
    /* datos personales */
    var resumenNombre = document.getElementById('resumenNombre');
    resumenNombre.textContent = document.getElementById('name').value;
    var resumenApellido = document.getElementById('resumenApellido');
    resumenApellido.textContent = document.getElementById('lastname').value;
    var resumenNacimiento = document.getElementById('resumenNacimiento');
    resumenNacimiento.textContent = document.getElementById('birth').value;
    var resumenProvincia = document.getElementById('resumenProvincia');
    resumenProvincia.textContent = document.getElementById('province').value;
    var resumenLocalidad = document.getElementById('resumenLocalidad');
    resumenLocalidad.textContent = document.getElementById('locality').value;
    /* datos contacto */
    var resumenEmail = document.getElementById('resumenEmail');
    resumenEmail.textContent = document.getElementById('email').value;
    var resumenTelefono = document.getElementById('resumenTelefono');
    resumenTelefono.textContent = document.getElementById('phone').value;
    /* datos pago */
    var resumenMedioPago = document.getElementById('resumenMedioPago');
    resumenMedioPago.textContent = document.getElementById('payment').value;
    
  }

});

function createPDF() {
  const section = document.getElementById("fieldsetResumen");
  const pdf = new jsPDF();
  pdf.html(section, {
    callback: function () {
      pdf.save("resumenFormulario.pdf");
    },
  });
}

const button = document.getElementById('btnPDF');
button.addEventListener('click', function() {
  const section = document.getElementById("my-section");
  const pdf = new jsPDF();
  pdf.html(section, {
    callback: function () {
      pdf.save("my-section.pdf");
    },
  });
});



document.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Has enviado el formulario!');
  alert('Has enviado el formulario!');
});

