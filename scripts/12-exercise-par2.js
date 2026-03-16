const multiply = (numberOne, numberTwo) => numberOne * numberTwo;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

function countPositive(nums) {
  let arrayNum = 0;

  nums.forEach((count) => {
    if (count > 0) {
      arrayNum++;
    }
  });

  return arrayNum;
};

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function addNum(array, num) {
  return array.map(arrayNum => arrayNum + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));


function removeEgg(foods) {
  let egg = 0;
  return foods.filter(value => {
    if (value !== 'egg') {
      return true
    } else if (value === 'egg') {
      if (egg < 2) {
        egg++
        return false
      } else if (egg >= 2) {
        return true
      }
    }
  })
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));