const h3 = document.querySelector('h3')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const button = document.querySelector('button')

function num(input, span, inpDop) {
    if(input.value) {
        if(input.value == Number(input.value)) {
            span.innerText = 'Верно'
            span.style.color = '#49d7ff';
            input.style.border = '1px solid #49d7ff';

        } else {
            span.innerText = 'Введите число'
            span.style.color = 'red';
            input.style.border = '1px solid red';
        }
    } else {
        span.innerText = 'Заполните поле'
        span.style.color = 'red';
        input.style.border = '1px solid red';
    }

    if(input.value && inpDop.value) {
        if(input.value == Number(input.value) && inpDop.value ==  +inpDop.value) {
            button.disabled = '';
        }
    } else {
        button.disabled = 'disabled';
    }
}

input1.addEventListener('input', () => {
    num(input1, span1, input2)
}) 

input2.addEventListener('input', () => {
    num(input2, span2, input1)
}) 

button.addEventListener('click', (e) => {
    e.preventDefault()

    h3.innerText = 'Результат - ' + (+input1.value + +input2.value)
})