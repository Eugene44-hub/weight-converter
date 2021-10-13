const typed = document.querySelector('#typed');
let output = document.querySelector('#output');


const select = document.querySelector('select');
(function() {
    select.addEventListener('change', e => {

        console.log()
    })
}())

typed.addEventListener('input',
    e => {
        console.log(typed.value);
        output.value = typed.value
    })


// if (e.target.value === kg) {

// }
// if (e.target.value === mg) {

// }
// if (e.target.value === ou) {

// }