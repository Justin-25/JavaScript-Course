const arrayString =  ['hello', 'world', 'search', 'good', 'search'];
let notFound = -1;

for (let i = 0; i < arrayString.length; i++) {
  if ('search' === arrayString[i]) {
    notFound = i;
    break;
  } else {
    notFound;
  }
}

console.log(notFound)

function findIndex(array, word) {
  const notFound = -1

  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      return i;
    } else {
      notFound;
    }
  }
  return notFound;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

function removeEgg(foods) {
  let food = []
  foods = foods.reverse();
  let egg = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg') {
      if (egg < 2) {
        egg++
        continue;
      } else {
        food.push(foods[i]);
      }
    } else {
      food.push(foods[i]);
    }
  }

  food = food.reverse()

  return food;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));