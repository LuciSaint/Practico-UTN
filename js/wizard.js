//Wizard
let wizardBar = document.querySelector('[data-wizard-bar]')
let btnPrevious = document.querySelector('[data-btn-previous]')
let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  let formTabs = document.querySelectorAll('[data-form-tab]');
  let wizardItem = document.querySelectorAll('[data-wizard-item]')
  formTabs[n].classList.add('active')
  wizardItem[n].classList.add('active')

  if (n == 0) {
    btnPrevious.style.display = "none";
  } else {
    btnPrevious.style.display = "block";
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
    if (formInputs[i].value == "") {
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

fechaMaximaID.max = new Date().toISOString().split("T")[0];
fechaMinimaID.min = new Date().toISOString().split("T")[0];
