const typed = document.querySelector('#typed');
let output = document.querySelector('#output');
let select = document.querySelector('#in-weight');
let select2 = document.querySelector('#out-weight');


(function() {
    select.addEventListener('change', e => {

        console.log(e.target.value)
    })
}())

(function() {
    select2.addEventListener('change', e => {

        console.log(e.target.value)
    })
}())

typed.addEventListener('input',
    e => {
        if (select.value === kg) {

        }
        if (select.value === mg) {

        }
        if (select.value === ou) {

        }
    })

output.addEventListener('input',
    e => {
        if (select2.value === kg) {

        }
        if (select2.value === mg) {

        }
        if (select2.value === ou) {

        }
    })