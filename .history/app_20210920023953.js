let typed = document.querySelector('#typed');
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
            output.value = Number(e.target.value) * 0.000035274
        }
        if (select2.value === "ou" && select.value === 'kg') {
            output.value = Number(e.target.value) / 35.274
        }
        if (select2.value === "kg" && select.value === 'ou') {
            outut.value = Number(e.target.value) / 0.000035274
        }
        if (select2.value === "mg" && select.value === 'ou') {
            output.value = Number(e.target.value) / 28350
        }
        if (select2.value === "kg" && select.value === 'mg') {
            output.value = Number(e.target.value) / Math.pow(10, -6)
        }

    })

output.addEventListener('input',
    e => {
        if (select2.value === 'mg' && select.value === 'kg') {
            typed.value = Number(e.target.value) / Math.pow(10, -6)
        }
        if (select2.value === "mg" && select.value === 'ou') {
            typed.value = Number(e.target.value) * 0.000035274
        }
        if (select2.value === "ou" && select.value === 'kg') {
            typed.value = Number(e.target.value) / 35.274
        }
        if (select2.value === "kg" && select.value === 'ou') {
            typed.value = Number(e.target.value) * 35.274
        }
        if (select2.value === "ou" && select.value === 'mg') {
            typed.value = Number(e.target.value) / 0.000035274
        }
        if (select2.value === "kg" && select.value === 'mg') {
            output.value = Number(e.target.value) * Math.pow(10, -6)
        }


    })