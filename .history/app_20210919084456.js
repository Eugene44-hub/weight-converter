const typed = document.querySelector('#typed');
let output = document.querySelector('#output');
let select = document.querySelector('select');


(function() {
    select.addEventListener('change', e => {

        console.log(e.target.value)
    })
}())

typed.addEventListener('input',
    e => {

    })