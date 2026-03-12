// const arrayString =  ['hello', 'world', 'search', 'good', 'search'];
// let notFound = -1;

// for (let i = 0; i < arrayString.length; i++) {
//   if ('search' === arrayString[i]) {
//     notFound = i;
//     break;
//   } else {
//     notFound;
//   }
// }

// console.log(notFound)

// function findIndex(array, word) {
//   const notFound = -1

//   for (let i = 0; i < array.length; i++) {
//     if (word === array[i]) {
//       return i;
//     } else {
//       notFound;
//     }
//   }
//   return notFound;
// }

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
// console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];

// function removeEgg(foods) {
//   let foodey = [];
//   let foody = foods.slice();
//   foody = foody.reverse();
//   let egg = 0;
//   for (let i = 0; i < foody.length; i++) {
//     if (foody[i] === 'egg') {
//       if (egg < 2) {
//         egg++
//         continue;
//       } else {
//         foodey.push(foody[i]);
//       }
//     } else {
//       foodey.push(foody[i]);
//     }
//   }

//   foodey = foodey.reverse();

//   return foodey;
// }

// console.log(removeEgg(foods));
// console.log(foods);


for (let i = 1; i <= 20; i++) {
  let fizzBuzz = '';

  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz += 'fizzBuzz';
    console.log(fizzBuzz);
  } else if (i % 5 === 0) {
    fizzBuzz += 'Buzz';
    console.log(fizzBuzz);
  } else if ( i % 3 === 0) {
    fizzBuzz += 'fizz';
    console.log(fizzBuzz);
  } else {
    console.log(i);
  }
}

function findIndex(array, word) {
  const notFound = -1

  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      return i;
    }
  }
  return notFound;
}

function unique(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (findIndex(result, array[i]) === -1) {
      result.push(array[i])
    }
  }

  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));