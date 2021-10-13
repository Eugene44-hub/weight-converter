const typed = document.querySelector('#typed');
const output = document.querySelector('#output');

typed.addEventListener('input',
    e => {
        console.log(typed.value);
        output.textContent
    })