import './style.css'
const [country,ZIP,email,password,confrimPassword] = [...document.querySelectorAll('input')];
const closeButton = document.querySelector('#cancel');
// update code to check if there are spaces ('\s')
const constraints = {
    country: [/\d/,'4'],
    ZIP: ['5'],
    email:['^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$','8'],
    password:['^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,32}$','8'],
    confrimPassword:['^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,32}$','8'],
}

function checkCountryValidity(){
    const error = document.getElementsByClassName('error')[0];
    if (country.value.length<+constraints.country[1] && country.value.length>0){
        error.textContent = `Shortest country name is 4 characters. You are at ${country.value.length}.`;
        country.setCustomValidity('Too short.');
        country.nextElementSibling.innerHTML = '&#x2717;';
        country.nextElementSibling.style.color = 'red';
        
    }   
    else if (constraints.country[0].test(country.value)){
        error.textContent = 'A country cannot contain numbers in its name.';
        country.setCustomValidity('Invalid Input.');
        country.nextElementSibling.innerHTML = '&#x2717;';
        country.nextElementSibling.style.color = 'red';
    }
    else {
        error.textContent = '';
        
        if (country.value.length>0){
            country.setCustomValidity('');
            country.nextElementSibling.innerHTML = '&#10003;';
            country.nextElementSibling.style.color = 'green';
        }
        else {
            country.nextElementSibling.innerHTML = '&#x2717;';
            country.nextElementSibling.style.color = 'red';
        }
    }
}

function checkZipValidity(){
    const error = document.getElementsByClassName('error')[1];
    if (ZIP.value.length<+constraints.ZIP[0] && ZIP.value.length>0){
        error.textContent = `Shortest ZIP is 5 characters. You are at ${ZIP.value.length}.`;
        ZIP.setCustomValidity('Too short.');
        ZIP.nextElementSibling.innerHTML = '&#x2717;';
        ZIP.nextElementSibling.style.color = 'red';
    }
    else {
        error.textContent = '';
        if (ZIP.value.length>0){
            ZIP.setCustomValidity('');
            ZIP.nextElementSibling.innerHTML = '&#10003;';
            ZIP.nextElementSibling.style.color = 'green';
        }
        else {
            ZIP.nextElementSibling.innerHTML = '&#x2717;';
            ZIP.nextElementSibling.style.color = 'red';
        }
    }
}

function checkEmailValidity(){
    const error = document.getElementsByClassName('error')[2];
    if (email.value.length<+constraints.email[1] && email.value.length>0){
        error.textContent = `Email must be at least 8 characters. You are at ${email.value.length}.`;
        email.setCustomValidity('Too short.');
        email.nextElementSibling.innerHTML = '&#x2717;';
        email.nextElementSibling.style.color = 'red';
    }
    else if (!RegExp(constraints.email[0]).test(email.value) && email.value.length>0){
        error.textContent = 'Thats not an email bitch.(ex: youAre@gay.cum)';
        email.setCustomValidity('Not an email.');
        email.nextElementSibling.innerHTML = '&#x2717;';
        email.nextElementSibling.style.color = 'red';
    }
    else {
        error.textContent = '';
        if (email.value.length>0){
            email.setCustomValidity('');
            email.nextElementSibling.innerHTML = '&#10003;';
            email.nextElementSibling.style.color = 'green';
        }
        else {
            email.nextElementSibling.innerHTML = '&#x2717;';
            email.nextElementSibling.style.color = 'red';
        }
    }
}

function checkPasswordValidity(){
    const error = document.getElementsByClassName('error')[3];
    if (password.value.length<+constraints.password[1] && password.value.length>0){
        error.textContent = `Your password must be at least 8 characters and 32 at most. You are at ${password.value.length}.`;
        password.setCustomValidity('Password too short.');
        password.nextElementSibling.innerHTML = '&#x2717;';
        password.nextElementSibling.style.color = 'red';
        
    }
    else if (password.value.length>32){
        error.textContent = `Your password must be at least 8 characters and 32 at most. You are at ${password.value.length}.`;
        password.setCustomValidity('Password too long.');
        password.nextElementSibling.innerHTML = '&#x2717;';
        password.nextElementSibling.style.color = 'red';
        
    }    
    else if (!RegExp(constraints.password[0]).test(password.value) && password.value.length>0){
        error.textContent = 'Your password must have at least 1 letter, 1 number and 1 special character. ';
        password.setCustomValidity('Invalid Input.');
        password.nextElementSibling.innerHTML = '&#x2717;';
        password.nextElementSibling.style.color = 'red';
    }
    else {
        error.textContent = '';
        
        if (password.value.length>0){
            password.setCustomValidity('');
            password.nextElementSibling.innerHTML = '&#10003;';
            password.nextElementSibling.style.color = 'green';
        }
        else {
            password.nextElementSibling.innerHTML = '&#x2717;';
            password.nextElementSibling.style.color = 'red';
        }
    }
    checkConfrimPasswordValidity();
}
function checkConfrimPasswordValidity(){
    const error = document.getElementsByClassName('error')[4];
    if (confrimPassword.value!==password.value && confrimPassword.value.length>0){
        error.textContent = 'Passwords do not match!';
        confrimPassword.setCustomValidity('Passwords do not match.');
        confrimPassword.nextElementSibling.innerHTML = '&#x2717;';
        confrimPassword.nextElementSibling.style.color = 'red';
    }
    else {
        if (confrimPassword.value.length>=8){
            confrimPassword.setCustomValidity('');
            confrimPassword.nextElementSibling.innerHTML = '&#10003;';
            confrimPassword.nextElementSibling.style.color = 'green';
            error.textContent = '';
        }
        else {
            confrimPassword.nextElementSibling.innerHTML = '&#x2717;';
            confrimPassword.nextElementSibling.style.color = 'red';
            error.textContent = '';
        }
        
    }
}

country.addEventListener('input',checkCountryValidity);
ZIP.addEventListener('input',checkZipValidity);
email.addEventListener('input',checkEmailValidity);
password.addEventListener('input',checkPasswordValidity);
confrimPassword.addEventListener('input',checkConfrimPasswordValidity);

window.onload = () => {
    checkCountryValidity();
    checkZipValidity();
    checkEmailValidity();
    checkPasswordValidity();
    checkConfrimPasswordValidity();
}

closeButton.addEventListener('click',()=>{
    document.querySelector('form').reset();
    checkCountryValidity();
    checkZipValidity();
    checkEmailValidity();
    checkPasswordValidity();
    checkConfrimPasswordValidity();
})

