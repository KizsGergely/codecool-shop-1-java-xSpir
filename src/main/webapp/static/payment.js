let emailer = document.getElementById('email');
const radios = document.querySelectorAll('input[type=radio]');
const pay = document.getElementById('pay');

function changeEmail() { //TODO: check for valid email address! ('@')
    let email = document.getElementById('user').textContent;
    let input = document.createElement('input');
    input.value = email;
    input.id = 'user';
    document.getElementById('user').replaceWith(input);
    emailer.textContent = "Save";
    emailer.removeEventListener('click', changeEmail);
    emailer.addEventListener('click', saveEmail);
}

function saveEmail() {
    const email = document.getElementById('user').value;
    let p = document.createElement('p');
    p.textContent = email;
    p.id = 'user';
    document.getElementById('user').replaceWith(p);
    emailer.textContent = "Change email";
    emailer.removeEventListener('click', saveEmail);
    emailer.addEventListener('click', changeEmail);
}

function changePayButton() {
    pay.textContent = 'Pay with ';
    let buttonText = radios[0].checked ? radios[0].nextElementSibling.textContent : radios[1].nextElementSibling.textContent;
    pay.textContent += buttonText;

}

emailer.addEventListener('click', saveEmail);
changePayButton();
radios.forEach(radio => radio.addEventListener('change', changePayButton));

// radios.forEach(radio => radio.addEventListener('change', () => {
//     radios.forEach(radio => () => {
//         radio.checked ? radio.checked = false : radio.checked = true;
//     })
// }))