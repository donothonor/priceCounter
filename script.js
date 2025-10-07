const price = document.getElementById('price')
const result = document.getElementById('result')
const body = document.getElementById('body')
const percentResult = document.querySelector('.percent__result')
const percent = document.getElementById('percent')
const bigResultText = document.querySelector('.big-result__text')
const bigResultButton = document.getElementById('big-result')
const percentageListBtn = document.querySelector('.percentage-value_btn')
const percentageList = document.querySelector('.percentage-value')
const showBtn = document.querySelector('.show-button')


//Слушатели событий
bigResultButton.addEventListener('click', () => bigResultText.toggleDisplayMode())
percentResult.addEventListener('click', () => percentResult.toggleBigFontSize())
percent.addEventListener('click',  () => percentResult.toggleDisplayMode())
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

    if (e.keyCode === 32) percentResult.toggleDisplayMode() 
    if (e.code === 'NumpadDivide') {
        bigResultText.toggleDisplayMode()
    }     
}
price.oninput  = function () {
    price.value = price.value.replace(/[^\d\.]/g,'')
    calculate()
}

//Функции
//Вычисляем итоговое значение
function calculate() {
    result.addBackgroundColorGreen()
    if (price.value >= 0 && price.value < 50) {
        multiply(355)
    } else if (price.value >= 50 && price.value < 150) {
        multiply(196)
    } else if (price.value >= 150 && price.value < 400) {
        multiply(174)
    } else if (price.value >= 400 && price.value < 800) {
        multiply(157)
    } else if (price.value >= 800 && price.value < 1200) {
        multiply(151)
    } else if (price.value >= 1200 && price.value < 2000) {
        multiply(147)
    } else if (price.value >= 2000 && price.value < 3000) {
        multiply(143)
    } else if (price.value >= 3000 && price.value < 4000) {
        multiply(140)
    } else if (price.value >= 4000 && price.value < 5000) {
        multiply(137)
    } else if (price.value >= 5000 && price.value < 7000) {
        multiply(130)
    } else if (price.value >= 7000 && price.value < 15000) {
        multiply(132)
    } else if (price.value >= 15000) {
        multiply(128)
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

function multiply (multiplier) {
    result.value = `${Math.ceil(Math.ceil(price.value * (multiplier / 100)) / 10) * 10} р.`
    percentResult.innerHTML = `НАЦЕНКА - ${multiplier - 100}%`
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

