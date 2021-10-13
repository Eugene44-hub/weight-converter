const typed = document.querySelector('#typed');
let output = document.querySelector('#output');

typed.addEventListener('input',
    e => {
        console.log(typed.value);
        output.value = typed.value
    })

const select = document.querySelector('select');
(function()()) select.addEventListener('change', e => {
    console.log(e.target.value)
})