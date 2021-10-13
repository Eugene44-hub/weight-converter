const typed = document.querySelector('#typed');
let output = document.querySelector('#output');
let select = document.querySelector('#in-weight');
let select2 = document.querySelector('#out-weight');

select2.addEventListener('change', e => {

    console.log(e.target.value)
})

select.addEventListener('change', e => {

    console.log(e.target.value)
})

typed.addEventListener('input',
    e => {

        if (select.value === 'kg') {
            output.value * 16
        }
        if (select.value === "mg") {

        }
        if (select.value === 'ou') {

        }
    })

output.addEventListener('input',
    e => {

        if (select.value === 'kg') {
            output.value * 16
        }
        if (select.value === "mg") {

        }
        if (select.value === 'ou') {

        }
    })