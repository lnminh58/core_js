// var
// const
// let

// var name = 'Thiem';

// console.log('name', name);
// getName();
// console.log('name', name);

//  function getName() {
//   name = 'Minh';
//   // var name = "Minh"
//   console.log('name in func', name);
// }

// const greeting = function(params) {
//   console.log("hi i'm anonymous func");
// };

// // arrow func
// const getNameArrow = (person = 'Thiem') => {
//   console.log(' arrow this is: ', this);
// };

// function getName(person) {
//   console.log('this is: ', this);
// }

// // bind this in function
// a = {
//   getNameArrow: (person = 'Thiem') => {
//     console.log(' arrow this is: ', this);
//   },
//    getName: function(praram) {
//     console.log('this is: ', this, );
//   }
// };

// a.getNameArrow();
// a.getName();

// (function (person) {
//   console.log('name: ', person);
// })('name')

// const passParamsFunc = (params, callback) => {
//   console.log(params, callback);
//   console.log('name is: ', params.name);
//   console.log('age is: ', params.age);
//   console.log('address is: ', params.address);
//   callback();
// };

// // passParamsFunc({ name: 'aloalo', age: 15, address: 'NewYork' }, () => {
// //   console.log('done');
// //   console.log('Blo');
// // // });
// // var ten = prompt('Username');
// // ten;
// // document.write('Ten toi la thiem');
// // var name = 'thiem';
// // document.write(name);
// // var level = 1;
// var xp = 0;
// var skillpoints = 5;
// // // // console.log('level= ',level,'experience= ', xp,'skillpoints= ', skillpoints);
// // // // alert(xp)
// var strength = 60 * skillpoints + (10 / 100) * xp;
// var agility = 20 * skillpoints + (20 / 100) * xp;
// var intelligent = 20 * skillpoints + (1000 / 100) * level;
// // console.log('Chỉ số strength của bạn là ', strength )
// // console.log('Chỉ số agility của bạn là ', agility )
// // console.log('Chỉ số intelligent của bạn là ', intelligent )
// // compare1 = 0 > 2;
// // console.log(compare1);
// // compare2 = 15 ==="15";
// // console.log(compare2);
// // var phanCap= prompt('Bạn muốn chọn phân cấp nào? a: Chiến binh| b: Sát thủ| c: Thợ săn')
// // phanCap;
// // if (phanCap==='a') {
// //   console.log('Anh Hùng')
// //   strength=strength+10;
// //   agility=agility-10;
// // } else if (phanCap==='b') {
// //   console.log('Sát thủ')
// //   strength=strength-10;
// //   agility=agility+5;
// //   intelligent=intelligent+5;
// // } else if (phanCap==='c') {
// //   console.log('Thợ Săn');
// //   strength=strength-10;
// //   intelligent=intelligent+10;
// // } else {
// //   console.log('Nhập sai phanCap!!!')
// // // }
// // var i=1;
// // while(i<10){
// //   console.log(i);
// //   i++;
// // }console.log(i)
// //Assassin's index
// var level = 5;
// var health = level * 100;
// console.log('strength:', strength);
// console.log('agility:', agility);
// console.log('intelligent:', intelligent);
// //Dragon's index
// var dragonHealth = 600;
// var dragonStr = 100;
// var dragonAgi = 15;
// var dragonInt = 80;
// var gameContinue = true;
// while (gameContinue) {
//   if ((Math.random()*100) > dragonAgi) {
//     if ((Math.random()*100) > intelligent) {
//       console.log('Bạn đã gây sát thương chí mạng X2', strength * 2, 'damge lên rồng');
//       dragonHealth = dragonHealth - strength * x2;
//     } else {
//       console.log('Bạn đã gây sát thương ', strength, 'Damge lên rồng');
//       dragonHealth = dragonHealth - strength;
//     }
//   } else {
//     console.log('miss, rồng đã né được!!!');
//   }
//   if (dragonHealth<=0) {
//     console.log('Rồng đã bị tiêu diệt')
//     gameContinue=false;
//   } else {
//     if ((Math.random()*100)>agility) {
//       if ((Math.random()*100)>dragonInt) {
//         console.log('Rồng đã gây sát thương chí mạng 200%',(dragonStr*2),'Damge lên sát thủ')
//         health= health-(dragonStr*2);
//       } else {
//         console.log('Rồng đã gây sát thương,',dragonStr,'Damge lên sát thủ')
//         health=health-dragonStr;
//       }
//     } else {
//       console.log('Một cú né thật ngoạn mục,Bạn đã né được!!!')
//     }
//   }
//   if (health<=0) {
//     console.log('Chúc mừng bạn đã nằm trên dĩa của rồng')
//     gameContinue=false;
//   }
//
// Quest 7
// var AnhHung ={
// name : 'Napoleon',
// age :  29,
// level: 30,
// str: 100,
// agi: 200,
// vit: 300,
// ene: 600,

// walk: function(){
//   console.log('Lăng ba vi bộ!!!')
// },
// fight : function(){
// console.log('Giáng long thập bác chưởng')
// }

// }
// console.log('tên: ',AnhHung.name);
// console.log('tuổi: ',AnhHung.age);
// console.log('cấp độ: ',AnhHung.level);
// AnhHung.walk(),
// AnhHung.intel=500,
// AnhHung.LauHaiSan=function(){
//   console.log('Lẫu rồng')
// }
// console.log('Dragon IQ: ',AnhHung.intel),
// AnhHung.LauHaiSan();
// Quest8 question8 jibun
// var mang = [];
// var count = 1;
// while (count < 4) {
//   var question1 = prompt('Bạn có người yêu chưa? ');
//   mang.push(question1);
//   count++;
//   var question2 = prompt('Bạn thích ăn rau dền không? ');
//   mang.push(question2);
//   count++;
//   var question3 = prompt('Người yêu bạn thích ăn rau dền không? ');
//   mang.push(question3);
//   count++;
// }
// for (let index = 0; index < mang.length; index++) {
//   alert(mang[index]);
// }
//Question 8
var questionArr = ['Bạn có người yêu chưa?', 'Bạn thích ăn rau dền không', 'người yêu bạn thích ăn rau dền không'];
var answerArr = [];
for (let index = 0; index < 3; index++) {
  var anwser=prompt(questionArr[index]);
  answerArr.push(anwser);
}  
for (let index = 0; index < answerArr.length; index++) {
  alert(answerArr[index])
}
