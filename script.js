
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

let div = document.getElementById('out')

let myHappy = prompt('Введите любое число')
if (myHappy < 100 ){
    console.log(myHappy)
}
else{
    div.innerHTML = myHappy
}
