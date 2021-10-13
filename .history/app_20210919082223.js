const typed = document.querySelector('#typed');
let output = document.querySelector('#output');

typed.addEventListener('input',
    e => {
        console.log(typed.value);
        output.value = 'jfj'
    })