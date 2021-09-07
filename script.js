const price = document.getElementById('price')
const result = document.getElementById('result')
const submit = document.getElementById('submit')
const body = document.getElementById('body')
const percentResult = document.querySelector('.percent__result')
const percent = document.getElementById('percent')
const bigResultText = document.querySelector('.big-result__text')
const bigResultButton = document.getElementById('big-result')
const percentageListBtn = document.querySelector('.percentage-value_btn')
const percentageList = document.querySelector('.percentage-value')
const showBtn = document.querySelector('.show-button')


//Слушатели событий
bigResultButton.addEventListener('click',  () => bigResultText.toggleDisplayMode())
percentResult.addEventListener('click', () => percentResult.toggleBigFontSize())
percent.addEventListener('click',  () => percentResult.toggleDisplayMode())
submit.addEventListener('click', () => result.addBackgroundColorGreen())
submit.addEventListener('click', calculate)
price.addEventListener('click', setDefault)
showBtn.addEventListener('click', () => price.toggleType())

percentageListBtn.addEventListener('click', function (){
    this.classList.toggle('clicked')
    percentageList.classList.toggle('hidden')
})

function hideList () {
        percentageListBtn.classList.remove('clicked')
        percentageList.classList.add('hidden') 
}
// Слушатель нажитий клавиш на клавиатуре
body.onkeypress = function (e) {
    if (e.keyCode === 13) {
        calculate()
        result.addBackgroundColorGreen()
    }
    if (e.keyCode === 32) percentResult.toggleDisplayMode() 
    if (e.code === 'NumpadDivide') {
        bigResultText.toggleDisplayMode()
    }     
}
price.oninput  = function () {
    price.value = price.value.replace(/[^\d\.]/g,'')
}

//Функции
//Вычисляем итоговое значение
function calculate() {
    if (price.value >= 0 && price.value < 50) {
        result.value = `${Math.ceil(Math.ceil(price.value * 3.04) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 204%"
    } else if (price.value >= 50 && price.value < 150) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.84) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 84%"
    } else if (price.value >= 150 && price.value < 400) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.59) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 59%"
    } else if (price.value >= 400 && price.value < 800) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.49) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 49%"
    } else if (price.value >= 800 && price.value < 1200) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.44) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 44%"
    } else if (price.value >= 1200 && price.value < 2000) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.39) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 39%"
    } else if (price.value >= 2000 && price.value < 3000) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.34) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 34%"
    } else if (price.value >= 3000 && price.value < 4000) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.32) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 32%"
    } else if (price.value >= 4000 && price.value < 5000) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.29) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 29%"
    } else if (price.value >= 5000 && price.value < 7000) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.27) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 27%"
    } else if (price.value >= 7000 && price.value < 15000) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.24) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 24%"
    } else if (price.value >= 15000) {
        result.value = `${Math.ceil(Math.ceil(price.value * 1.15) / 10) * 10} р.`
        percentResult.innerHTML = "НАЦЕНКА - 15%"
    }
    bigResultButton.disabled = false
    bigResultText.innerHTML = result.value
}
//Возвращаем дефолтное состояние
function setDefault () {
    bigResultButton.disabled = true
    price.value = ""
    result.value = ""
    bigResultText.classList.add('display__none')
    result.classList.remove('background__green')
    result.classList.remove('text__white')
    price.type = 'password'
}



//Методы объектов
 Object.prototype.toggleDisplayMode = function () { 
    this.classList.toggle('display__none')
}
Object.prototype.addBackgroundColorGreen = function () {
    this.classList.add('background__green')
    this.classList.add('text__white')
}    
Object.prototype.toggleBigFontSize = function () {
    this.classList.toggle('big-font_size')
}
Object.prototype.toggleDisableMode = function () {
    this.disabled ? this.disabled = false : 
                    this.disabled = true
}
Object.prototype.toggleType = function () {
    this.type === 'password' ? this.type = 'number' :
                               this.type = 'password'
}

