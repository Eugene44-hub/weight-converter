const typed = document.querySelector('#typed');
let output = document.querySelector('#output');
const select = document.querySelector('select');
typed.addEventListener('input',
    e => {
        console.log(typed.value);
        output.value = typed.value
    })