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

        if (select2.value === 'mg' && select.value === 'kg') {
            output.value = Number(e.target.value) * Math.pow(10, -6)

        }
        if (select2.value === "ou" && select.value === 'mg') {
            output.value = Number(e.target.value) * Math.pow(10, 6)
        }
        if (select2.value === "kg" && select.value === 'ou') {
            output.value = Number(e.target.value) * Math.pow(10, 6)
        }

        if (select2.value === 'mg' && select.value === 'kg') {
            output.value = Number(e.target.value) * Math.pow(10, -6)

        }
    })

// output.addEventListener('input',
//     e => {

//         if (select.value === 'kg') {

//         }
//         if (select.value === "mg") {

//         }
//         if (select.value === 'ou') {

//         }
//     })