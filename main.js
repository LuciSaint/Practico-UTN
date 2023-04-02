const form = document.getElementById('wizard-form');
const prevButtons = document.querySelectorAll('.prev-button');
const nextButtons = document.querySelectorAll('.next-button');
const steps = form.querySelectorAll('.wizard-step');
let currentStep = 0;

function showStep(n) {
  steps[currentStep].style.display = 'none';
  steps[n].style.display = 'block';
  currentStep = n;
}

function prevStep() {
  showStep(currentStep - 1);
}

function nextStep() {
  if (validateStep()) {
    showStep(currentStep + 1);
  }
}

function validateStep() {
  let inputs = steps[currentStep].querySelectorAll('input');
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });

  return isValid;
}

prevButtons.forEach((button) => {
  button.addEventListener('click', prevStep);
});

nextButtons.forEach((button) => {
  button.addEventListener('click', nextStep);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted!');
});