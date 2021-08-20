function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
function validateData() {
  let name = document.querySelector('[name=name]');
  
  if(name.value.length > 40 || name.value.length === 0) {
    alert('Nome inválido!')
  }
}
function validateEmail() {
  let email = document.querySelector('[name=email]');
  
  if(email.value.length > 40 || email.value.length === 0) {
    alert('E-mail inválido!')
  }
}

function handleSubmit(event) {
  event.preventDefault();

  validateData();
  validateEmail();
}

window.onload = function () {
  createStateOptions();
  
  let button = document.querySelector('.submit-button');
  button.addEventListener('click', handleSubmit);

  // let clearButton = document.querySelector('.clear-button');
  // clearButton.addEventListener('click', clearFields)
}