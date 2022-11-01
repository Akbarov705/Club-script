// let name = prompt("Как вас зовут?").toLowerCase()


// if (name === 'alex') {
//     let account = prompt('Номер счета?')

//     if (account === '7777') {

//         let money = prompt('Сколько обналичить?')

//         if (money <= 10000) {
//             alert("Все гуд")
//             let reply = prompt('Сколько снял?')
//             alert('10000' - reply)

//         }
//         else {
//             alert('Недoстаточно денег')
//         }

//     }
//     else (
//         alert('Пользователь не найден, досвидули')
//     )

// }
// else {
//     alert('Пользователь не найден, досвидули')
// }




let namee = prompt("Как тебя зовут?").toLowerCase()
let age = prompt("Сколько тебе лет?")
let moneyy = prompt("Сколько у тебя денег")
let people = prompt("Сколько людей заходят")


if (namee[0] === 'a' && age <= 40 && age >=20 && moneyy >=100) {
    console.log("Добро пожаловать в наш клуб укажон!")
}
else{
    console.log("Хонетба рав укажон/бобожон ");
}
console.log(people);