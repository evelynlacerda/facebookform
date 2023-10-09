const loginBox = document.querySelector('#login');
const signupBox = document.querySelector('#signup');
const welcomeBox = document.querySelector('#welcome');

const newAccountButton = document.querySelector('[data-create-account]');
const loginAccountButton = document.querySelector('[data-login-account]');
const logoutButton = document.querySelector('[data-logout-account]');

const signupButton = document.querySelector('[data-form-signup]');
const loginButton = document.querySelector('[data-form-login]');

function loginSuccess () {
    loginBox.style.display = 'none';
    signupBox.style.display = 'none';
    welcomeBox.style.display = 'flex';
}

function createAccount () {
    loginBox.style.display = 'none';
    signupBox.style.display = 'flex';
    welcomeBox.style.display = 'none';
}

function loginAccount () {
    loginBox.style.display = 'flex';
    signupBox.style.display = 'none';
    welcomeBox.style.display = 'none';
}

newAccountButton.addEventListener('click', createAccount);
loginAccountButton.addEventListener('click', loginAccount);
logoutButton.addEventListener('click', loginAccount);

signupButton.addEventListener('submit', (e) => {
    e.preventDefault();

    signupBox.style.display = 'none';
    welcomeBox.style.display = 'flex';
})

loginButton.addEventListener('submit', (e) => {
    e.preventDefault();

    loginBox.style.display = 'none';
    welcomeBox.style.display = 'flex';
})