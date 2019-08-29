// Bài: 5 Tính S = 1 + 1/3 + 1/5 + … + 1/(2n + 1)

// let sum = 0;
// const Sum = function  {
//     for (let index = 0; index < n + 1; index++) {
//         sum = sum + (1 / (2 * index + 1));
//     }
//     return sum;
// }
// console.log('sum = ', Sum(2));

// Bài 11: Tính S = 1 + 1.2 + 1.2.3 + … + 1.2.3….N

// let sumFactorial = 0;
// let factorial = 1;
// const SumFactorial = function  {
//     for (let index = 1; index < n + 1; index++) {
//         factorial = factorial * index;
//         sumFactorial = sumFactorial + factorial;
//     }
//     return sumFactorial;
// }
// console.log('sumFactorial = ', SumFactorial(4));

// Bài 17: Tính S = x + x^2/2! + x^3/3! + … + x^n/N!

// let sumFactory = 0;
// let factorial = 1;
// let sumFactorial = 0;
// let exponential = 1;
// let sumIntergrate = 0;
// const SumIntergrate = function (x, n) {
//     for (let index = 1; index < n + 1; index++) {
//         exponential = exponential * x;
//         factorial = factorial * index;
//         sumIntergrate = sumFactorial + (exponential / (factorial));
//     }
//     return sumIntergrate;
// }
// console.log('sumIntergrate = ', SumIntergrate(4, 3));

// Bài 138: Tìm vị trí của giá trị chẵn đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì sẽ trả về -1

// const intArr=[Math.floor(Math.random()*1000),Math.floor(Math.random()*1000),Math.floor(Math.random()*1000),Math.floor(Math.random()*1000),Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)]
// console.log(intArr);
// const evenNumber= intArr.find(item=>(item%2===0));
// if (evenNumber.length<1||evenNumber==undefined) {
//     console.log('There are no any even Number in this array');
// } else {
//     console.log('The first evenNumber is: ',evenNumber);
// }

//Bài 141: Hãy tìm vị trí giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì trả về -1

// const intArr = [Math.floor(Math.random()  1000) -500, Math.floor(Math.random()  1000) -500, Math.floor(Math.random()  1000) -500, Math.floor(Math.random()  1000) -500, Math.floor(Math.random()  1000) -500, Math.floor(Math.random()  1000) -500]
// console.log(intArr);
// const maxNumber = [];
// intArr.forEach(element => {
//     if (element > 0) {
//         maxNumber.push(element)
//     }

// });
// let max=maxNumber[0];
// for (let index = 0; index < maxNumber.length; index++) {

//     if (maxNumber[index]>max) {
//         max=maxNumber[index]
//     }

// }
// console.log(maxNumber)
// console.log('maxNumber ',max)

// Bài 196: Liệt kê các số âm trong mảng 1 chiều các số nguyên

// const intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// console.log(intArr);

// const negativeArr = [];
// intArr.forEach(element => {
//     if (element < 0) {
//         negativeArr.push(element);
//     }
// })
// console.log('negativeArrat: ', negativeArr)

// Bài 201: Tính tổng các giá trị dương trong mảng 1 chiều các số thực

// const intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// console.log(intArr);
// const positiveNumbers = [];
// intArr.forEach(element => {
//     if (element > 0) {
//         positiveNumbers.push(element)
//     }
// })
// sumPositiveNumber = 0;
// for (let index = 0; index < positiveNumbers.length; index++) {
//     sumPositiveNumber = sumPositiveNumber + positiveNumbers[index];
// }
// console.log('Positive Number Array: ', positiveNumbers)
// console.log('Sum the positive numbers: ', sumPositiveNumber)

// Bài 216: Đếm số lượng số chẵn trong mảng

// const intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// console.log(intArr);
// let evenNumberCount = 0;
// intArr.forEach(element => {
//     if (element % 2 === 0) {
//         evenNumberCount++;
//     }
// })
// console.log('Count the even numbers in array: ', evenNumberCount)

// Bài 248: Kiểm tra mảng có tăng dần hay không

// const intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// console.log(intArr);
// let isAcending=true;
// for (let index = 0; index < intArr.length; index++) {
//     if(intArr[index+1]<intArr[index]){
//         isAcending=false;
//         break;
//     }
// }
// if (isAcending===false) {
//     console.log('Not Ascending array!!!')
// } else {
//     console.log('Is Ascending array!!!')
// }

// Bài 255: Sắp xếp mảng tăng dần

// let intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// console.log(intArr);
// for (let index = 0; index < intArr.length - 1; index++) {
//     for (let index1 = 0; index1 < intArr.length; index1++) {
//         if (intArr[index1 + 1] < intArr[index1]) {
//             let currentPosition = intArr[index1];
//             intArr[index1] = intArr[index1 + 1];
//             intArr[index1 + 1] = currentPosition;
//         }
//     }
// }
// console.log('Arranged array: ', intArr)

// Bài 261: Sắp xếp số dương tăng dần, các số âm giữ nguyên vị trí

// let intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// console.log(intArr);
// for (let index = 0; index < intArr.length - 1; index++) {
//     if (intArr[index] > 0) {
//         for (let index1 = 0; index1 < intArr.length; index1++) {
//             if (intArr[index] > 0 && intArr[index1 + 1] < intArr[index1]) {
//                 let currentPosition = intArr[index1];
//                 intArr[index1] = intArr[index1 + 1];
//                 intArr[index1 + 1] = currentPosition;
//             }
//         }
//     }
// }
// console.log('Arranged array: ', intArr)

// Bài 280: Hãy đưa số 1 về đầu mảng

// let intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// console.log(intArr);
// const backFirstPosition = function  {
//     let tempPosition = intArr[0];
//     intArr[0] = intArr[n];
//     intArr[n] = tempPosition;
// }
// backFirstPosition(3);
// console.log('New array: ', intArr);

// Bài 276: Xóa tất cả các phần tử trùng với x

// let intArr = [Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500, Math.floor(Math.random()  1000) - 500]
// let intArr = [6, 4, 8, 7, 9];
// console.log(intArr);
// const deleteDuplicate = function(x) {
//   for (let index = 0; index < intArr.length; index++) {
//     if ((intArr[index] === x)) {
//       intArr.splice(1, index);
//     }
//   }
// };
// deleteDuplicate(6);
// console.log('Before delete duplicate Number', intArr);

//Bài 273: Xóa tất cả các số âm trong mảng >>>>>>>>>>đang không đúng

const intArr = [...Array(10)].map(item => parseInt((Math.random() - 0.5) * 100));
console.log(intArr);

// deleteNegative = function (arr = []) {
//     // intArr.forEach(element => {
//     //     if (element<0) {
//     //         element=0;
//     //     }
//     // });

//     // arr.forEach((element, index) => {
//     //   element > 0 && positiveArr.push(element)
//     // });

//     return arr.filter((element, index) => element > 0);
// }
deleteNegative = arr => arr.filter((element, index) => element > 0);

const arr = deleteNegative(intArr);
console.log('positive Array: ', intArr, arr);
