let typed = document.querySelector('#typed');
let output = document.querySelector('#output');
let select = document.querySelector('#in-weight');
let select2 = document.querySelector('#out-weight');

// select2.addEventListener('change', e => {
//     if (select2.value === 'mg' && select.value === 'kg') {
//         typed.value = Number(e.target.value) / Math.pow(10, 6)
//     }
//     if (select2.value === "mg" && select.value === 'ou') {
//         typed.value = Number(e.target.value) * 0.000035274
//     } else if (select2.value === "ou" && select.value === 'kg') {
//         typed.value = Number(e.target.value) / 35.274
//     } else if (select2.value === "kg" && select.value === 'ou') {
//         typed.value = Number(e.target.value) * 35.274
//     } else if (select2.value === "ou" && select.value === 'mg') {
//         typed.value = Number(e.target.value) / 0.000035274
//     } else if (select2.value === "kg" && select.value === 'mg') {
//         typed.value = Number(e.target.value) * Math.pow(10, 6)
//     } else { typed.value = output.value }

// })

// select.addEventListener('change', e => {

//     if (select2.value === 'mg' && select.value === 'kg') {
//         output.value = Number(e.target.value) * Math.pow(10, 6)
//     } else if (select2.value === "ou" && select.value === 'mg') {
//         output.value = Number(e.target.value) * 0.000035274
//     } else if (select2.value === "ou" && select.value === 'kg') {
//         output.value = Number(e.target.value) * 35.274
//     } else if (select2.value === "kg" && select.value === 'ou') {
//         output.value = Number(e.target.value) / 35.274
//     } else if (select2.value === "mg" && select.value === 'ou') {
//         output.value = Number(e.target.value) / 0.000035274
//     } else if (select2.value === "kg" && select.value === 'mg') {
//         output.value = Number(e.target.value) / Math.pow(10, 6)
//     } else {
//         output.value = typed.value
//     }
// })

typed.addEventListener('input',
    e => {

        if (select2.value === 'mg' && select.value === 'kg') {
            output.value = Number(e.target.value) * Math.pow(10, 6)
        } else if (select2.value === "ou" && select.value === 'mg') {
            output.value = Number(e.target.value) * 0.000035274
        } else if (select2.value === "ou" && select.value === 'kg') {
            output.value = Number(e.target.value) * 35.274
        } else if (select2.value === "kg" && select.value === 'ou') {
            output.value = Number(e.target.value) / 35.274
        } else if (select2.value === "mg" && select.value === 'ou') {
            output.value = Number(e.target.value) / 0.000035274
        } else if (select2.value === "kg" && select.value === 'mg') {
            output.value = Number(e.target.value) / Math.pow(10, 6)
        } else {
            output.value = typed.value
        }
    })

output.addEventListener('input',
    e => {
        if (select2.value === 'mg' && select.value === 'kg') {
            typed.value = Number(e.target.value) / Math.pow(10, 6)
        } else if (select2.value === "mg" && select.value === 'ou') {
            typed.value = Number(e.target.value) * 0.000035274
        } else if (select2.value === "ou" && select.value === 'kg') {
            typed.value = Number(e.target.value) / 35.274
        } else if (select2.value === "kg" && select.value === 'ou') {
            typed.value = Number(e.target.value) * 35.274
        } else if (select2.value === "ou" && select.value === 'mg') {
            typed.value = Number(e.target.value) / 0.000035274
        } else if (select2.value === "kg" && select.value === 'mg') {
            typed.value = Number(e.target.value) * Math.pow(10, 6)
        } else { typed.value = output.value }

    })