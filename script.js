const price = document.getElementById('price')
const result = document.getElementById('result')
const submit = document.getElementById('submit')


submit.addEventListener('click',() => {
    if (price.value >= 0 && price.value < 50) result.value = Math.ceil(price.value * 3.04)
    else if (price.value >= 50 && price.value < 150) result.value = Math.ceil(price.value * 1.84)
    else if (price.value >= 150 && price.value < 400) result.value = Math.ceil(price.value * 1.59)
    else if (price.value >= 400 && price.value < 800) result.value = Math.ceil(price.value * 1.49)
    else if (price.value >= 800 && price.value < 1200) result.value = Math.ceil(price.value * 1.44)
    else if (price.value >= 1200 && price.value < 2000) result.value = Math.ceil(price.value * 1.39)
    else if (price.value >= 2000 && price.value < 3000) result.value = Math.ceil(price.value * 1.34)
    else if (price.value >= 3000 && price.value < 4000) result.value = Math.ceil(price.value * 1.32)
    else if (price.value >= 4000 && price.value < 5000) result.value = Math.ceil(price.value * 1.29)
    else if (price.value >= 5000 && price.value < 7000) result.value = Math.ceil(price.value * 1.27)
    else if (price.value >= 7000 && price.value < 15000) result.value = Math.ceil(price.value * 1.24)
    else if (price.value >= 15000) result.value = Math.ceil(price.value * 1.15)    
})
