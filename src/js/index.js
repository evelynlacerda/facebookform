const loginBox = document.querySelector('#login');
const signupBox = document.querySelector('#signup');
const newAccountButton = document.querySelector('[data-create-account]');
const loginButton = document.querySelector('[data-login-account]');

newAccountButton.addEventListener('click', () => {
    loginBox.style.display = 'none';
    signupBox.style.display = 'flex';
})

loginButton.addEventListener('click', () => {
    loginBox.style.display = 'flex';
    signupBox.style.display = 'none';
})