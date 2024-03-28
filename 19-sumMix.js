// WPU Coding Challenge
// 18/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// function sumMix(x){
//   let total = 0;
//   for(let i = 0; i < x.length; i++){
//     total += +x[i];
//   }
//   return total;
// }

// function sumMix(x){
//   return x.reduce((acc, curr) => acc + +curr, 0);
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);


console.log(sumMix([9, 3, '7', '3']));
