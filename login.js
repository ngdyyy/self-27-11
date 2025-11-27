const loginForm = document.getElementById('loginForm')
const nameInput = document.getElementById('name')
const passInput = document.getElementById('password')
const registbtn = document.getElementById('registbtn')
const error = document.getElementById('error')


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (passInput.value.length < 6 ) {
        error.textContent = 'Name or Password were incorrect';
        error.style.color = 'red';
        return;
    }
    else {
        error.textContent = `Welcome ${nameInput.value}`;
        error.style.color = 'green';
        return;
    }
});