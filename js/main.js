// alert(new Date());

// function myFunction() {
//   confirm("press a button");
// }

// console.log(prompt("Enter string"));

// //--------------------------------------------------------------------------------

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr1 = [];

// for (let i = 0; i < arr1.length; i++) {
//   if(arr1[i] % 2 === 0) {
//     newArr1.push(arr1[i]);
//   }
// }

// console.log(newArr1);

// //--------------------------------------------------------------------------------

// let arr2 = [3, 2, 30, -4, 9, 10, 7, 55, 12];

// for (let i = 0; i < arr2.length; i++) {
//   for (let j = i + 1; j < arr2.length; j++) {
//     if (arr2[j] < arr2[i]) {
//       const tmp = arr2[i];
//       arr2[i] = arr2[j];
//       arr2[j] = tmp;
//     }
//   }
// }

// console.log(arr2);

//--------------------------------------------------------------------------------

function mult () {
  let num1;
  let num2;

  num1 = document.forms.calc.num1.value;
  num2 = document.forms.calc.num2.value;

  document.getElementById("result").innerHTML = (num1 * num2).toString();
}

function divi () {
  let num1;
  let num2;

  num1 = document.forms.calc.num1.value;
  num2 = document.forms.calc.num2.value;

  document.getElementById("result").innerHTML = (num1 / num2).toString();
}
