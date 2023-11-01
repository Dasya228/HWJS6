//1.
//Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
// Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//  function myFunction(arr){
//     return arr.sort((a,b)=>b-a)
//  }
//  console.log(myFunction([1, 2, 3]))


//2.
//Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые
//строки, ноль, null. * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// function myFunction(arr){
//     let res=[]
//    return arr.filter(el=>el>0?el:el)
// }
// console.log(myFunction([0, 1, false, 2, undefined, '', 3, null]))


//3.
// Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// function myFunction(arr){
//  return arr.filter((el,idx,num)=>num.indexOf(el)===idx)
// }
// console.log(myFunction([1, 2, 3, 1, 2]))
//

//4.
// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// function myFunction(a,b){
//     return [...a,...b]
// }
// console.log(myFunction(['a', 'b', 'c'],[1, 2, 3]))


//5.
//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// function myFunction(arr, b){
//     return arr.concat(b)
// }
// console.log(myFunction([1, 2, 3],[4, 5, 6]))


//6. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.unshift(4,5,6)
// console.log(arr)

//7.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// let b = arr.splice(1,2)
// console.log(arr)



//8.  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// function myFunction(a){
//     return Object.keys(a)
// }
// console.log(myFunction({js:'test', jq: 'hello', css: 'world'}))


//9. Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// ['Капуста', 'Репа', 'Редиска', 'Морковка']

// function myFunction(str){
//     return str.map(el=>el.split(' ')).join(',').split()
// }
// console.log(myFunction(['Капуста Репа Редиска Морковка']))

//10.Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и
// заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть
// массив [кАжДыЙ оХоТнИк]
// function myFunction(str){
//    let res =[]
//    for(let i=0;i<str.length;i++){
//
//       if(str[i]===str[i].toUpperCase()){
// res+=str[i].toLowerCase()
//       }else {
//           res+=str[i].toUpperCase()
//       }
//    }
//    return res.split(',')
// }
// console.log(myFunction('КаЖдЫй ОхОтНиК'))




//11.1 фильтровать по цене. от 40000 до 60000 и год до 2019
// 2 марка
// const cars = [
//    {
//       make: "Ford",
//       model: "Mustang",
//       year: 1969,
//       color: "red",
//       price: 25000
//    },
//    {
//       make: "Ford",
//       model: "F-150",
//       year: 2017,
//       color: "blue",
//       price: 30000
//    },
//    {
//       make: "Tesla",
//       model: "Model S",
//       year: 2018,
//       color: "black",
//       price: 120000
//    },
//    {
//       make: "Chevrolet",
//       model: "Camaro",
//       year: 1970,
//       color: "orange",
//       price: 60000
//    },
//    {
//       make: "Dodge",
//       model: "Challenger",
//       year: 2019,
//       color: "red",
//       price: 35000
//    },
//    {
//       make: "Chevrolet",
//       model: "Corvette",
//       year: 2019,
//       color: "blue",
//       price: 90000
//    },
//    {
//       make: "Tesla",
//       model: "Model 3",
//       year: 2019,
//       color: "white",
//       price: 40000
//    },
//    {
//       make: "Mercedes",
//       model: "C-Class",
//       year: 2019,
//       color: "black",
//       price: 60000
//    }
// ]
// console.log(cars.filter(el=>el.price>=40000&&el.price<=60000 && el.year<=2019&&el.make==='Tesla'))
//


