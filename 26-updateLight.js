// WPU Coding Challenge
// 23/366
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// function updateLight(current) {
//   if(current === 'yellow'){
//     return 'red';
//   }
//   else if(current === 'red'){
//     return 'green';
//   }
//   else{
//     return 'yellow';
//   }
// }

// const updateLight = (current) => current === 'yellow' ? 'red' : current === 'red' ? 'green' : 'yellow';

// function updateLight(current) {
//   switch(current){
//     case 'yellow' : return 'red';
//     case 'red' : return 'green';
//     case 'green' : return 'yellow';
//   }
// }

// const rules = {
//   yellow: 'red',
//   red: 'green',
//   green: 'yellow',
// }
// function updateLight(current) {
//   return rules[current];
// }

const updateLight = (current) =>({
  yellow: 'red',
  red: 'green',
  green: 'yellow',
}[current])


console.log(updateLight("red"));