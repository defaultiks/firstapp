
// let a = 2
// let b = 2
// console.log('Какая-то фраза')
// console.log(a+b)


// УРОК 2


// let month = 10
// let firstName = 'Konstantin'

// console.log('Месяц рождения ' + month)
// console.log('Добро пожаловать на курс ' + firstName)

// alert('Сегодня 10.03.2025' )

// document.getElementById('one').textContent += 'Hello world'

// typeof undefined
// console.log(typeof undefined)
// typeof 0
// console.log(typeof 0)
// typeof 10n
// console.log(typeof 1110n)
// typeof true
// console.log(typeof false)
// typeof 'cat'
// console.log(typeof 'cat')
// typeof Symbol('id')
// console.log(typeof Symbol('id'))
// console.log(typeof null)


// УРОК 3

// function sayHello(){
//     console.log('Привет мир!')
// }

// sayHello()

// function add(a,b){
//     return a + b
// }

// let result = add(5,3)
// console.log(result)

// const muliply = (a,b) => {
//     return a * b
// }

// console.log(muliply(2,4));





// let btn = document.getElementById('check-in')
// let inputIn = document.getElementById('text')





// btn.onclick = function(){
//     console.log('Da')
//     console.log(inputIn.value)

//     let e = +inputIn.value

//     div.innerHTML = e 
// }

// let div = document.getElementById('out')

// let myHappy = prompt('Введите любое число')
// if (myHappy < 100 ){
//     console.log(myHappy)
// }
// else{
//     div.innerHTML = myHappy
// }


// УРОК 4


// let year = prompt('когда вышел ходячий замок Хаяо Миядзаки?')

// if (year < 2004){
//     alert('Рано')
// }
// else if(year > 2004){
//     alert('Поздно')
// }
// else{
//     alert('Верно')
// }

// console.log(5 % 2)

// console.log(2 ** 2)

// a = 10
// b = 5
// console.log(a == b)

// a = 10
// b = 9

// if (a>b || a-1===b){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// a = 10
// b = 9

// if (a>b && b+1===a){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')


// if(a+b>15){
//     alert('Да')
// }
// else{
//     alert('Нет')
// }

// let a = prompt('Введите первое число')
// let b = prompt('Введите второе число')
// if (a===b){
//     console.log('a = b', true)
// }
// else{
//     console.log(false)
// }


// УРОК 5


// let i = 0
// while (i<3){
//     console.log(i)
//     i++
// }

// let i = 0
// do{
//     console.log(i)
//     i++
// }while (i < 3)

// for (let i = 0; i < 3; i++){
//     console.log(i)
// }

// for (let i = 1; i<51; i++){
//     console.log(i)
// }

// for (let i = 50; i>24; i--){
//     console.log(i)
// }


// for (let i = 2500; i < 3000; i += 1) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }


// УРОК 6

// let a = +prompt('Введите цифру')
// let b = 4

// switch(a){
//     case 4:
//     alert('Верно')
//     break
//     case !4:
//     alert('Не верно')
//     break
//     default:
//     alert('не сработало')
//     break
    
// }

// let a
// let b = 1
// let c = 2

// alert(b ?? "неизвестно");  
// alert(a ?? "неизвестно"); 
// alert(c ?? "неизвестно");  


// УРОК 7


// let a = 5
// let btn = document.getElementById('check-in')
// let div = document.getElementById('out')

// btn.onclick = function elem(){
//     div.innerHTML = a
// }


function add() {
    calculate((a, b) => a + b);
}

function subtract() {
    calculate((a, b) => a - b);
}

function multiply() {
    calculate((a, b) => a * b);
}

function divide() {
    calculate((a, b) => {
        if (b === 0) {
            alert("Ошибка: Деление на ноль!");
            return null;
        }
        return a / b;
    });
}
function calculate(operation) {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value);
    const secondNumber = parseFloat(document.getElementById("secondNumber").value);
    
    const result = operation(firstNumber, secondNumber);
    document.getElementById("result").innerText = "Результат: " + result;
}

