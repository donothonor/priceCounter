const price = document.getElementById('price')
const result = document.getElementById('result')
const submit = document.getElementById('submit')
const body = document.getElementById('body')
const percentResult = document.querySelector('.percent__result')
const percent = document.getElementById('percent')

submit.addEventListener('click', calculate);
submit.addEventListener('click', changeInputBgrndColor);
percent.addEventListener('click', showPercentageOfMarkup);



body.onkeypress = function (e) {
    if (e.keyCode == 13) {
        calculate()
        changeInputBgrndColor()
    }
    if (e.keyCode == 32) showPercentageOfMarkup()
}
function changeInputBgrndColor () {
    result.classList.add('background__green')
    result.classList.add('text__white')
}

function calculate() {
    if (price.value >= 0 && price.value < 50) {
        result.value = `${Math.ceil(price.value * 3.04)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 204%"
    } else if (price.value >= 50 && price.value < 150) {
        result.value = `${Math.ceil(price.value * 1.84)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 84%"
    } else if (price.value >= 150 && price.value < 400) {
        result.value = `${Math.ceil(price.value * 1.59)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 59%"
    } else if (price.value >= 400 && price.value < 800) {
        result.value = `${Math.ceil(price.value * 1.49)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 49%"
    } else if (price.value >= 800 && price.value < 1200) {
        result.value = `${Math.ceil(price.value * 1.44)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 44%"
    } else if (price.value >= 1200 && price.value < 2000) {
        result.value = `${Math.ceil(price.value * 1.39)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 39%"
    } else if (price.value >= 2000 && price.value < 3000) {
        result.value = `${Math.ceil(price.value * 1.34)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 34%"
    } else if (price.value >= 3000 && price.value < 4000) {
        result.value = `${Math.ceil(price.value * 1.32)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 32%"
    } else if (price.value >= 4000 && price.value < 5000) {
        result.value = `${Math.ceil(price.value * 1.29)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 29%"
    } else if (price.value >= 5000 && price.value < 7000) {
        result.value = `${Math.ceil(price.value * 1.27)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 27%"
    } else if (price.value >= 7000 && price.value < 15000) {
        result.value = `${Math.ceil(price.value * 1.24)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 24%"
    } else if (price.value >= 15000) {
        result.value = `${Math.ceil(price.value * 1.15)} р.`
        percentResult.innerHTML = "НАЦЕНКА - 15%"
    } 
}

function showPercentageOfMarkup () {
    percentResult.classList.toggle('display__none')
}

(function () {
    price.addEventListener('click', () => {
        price.value = ""
        result.value = ""
        result.classList.remove('background__green')
        result.classList.remove('text__white')
    })
})()

