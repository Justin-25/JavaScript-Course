const nums = [
  10,
  20,
  30
]

nums[2] = 99;
console.log(nums);

function getLastValue(array) {
  let lastIndex = 0;
  lastIndex = array.length - 1;

  return array[lastIndex];
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));

function arraySwap(array) {
  let firstArray = array[0];
  let lastValue = array[array.length - 1];

  array[0] = lastValue;
  array[array.length - 1] = firstArray;

  return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

let index = 0;

while (index <= 10) {
  console.log(index);
  index += 2;
}

let i = 5;

while (i >= 0) {
  console.log(i)
  i--;
}

let numbers = [
  1,
  2,
  3
];

function increasedArray () {
  let newArray = [];

  for (let i = 0; i < numbers.length; i++ ) {

    newArray.push(numbers[i] + 1);
  }
  return newArray;
}

console.log(increasedArray());

function addOne(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);
  }

  return newArray;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + num)
  }

  return newArray;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

function addArrays(array1, array2) {
  let doubledArray = [];

  for (let i = 0; i < array1.length; i++) {
    doubledArray.push(array1[i] + array2[i]);

  }

  return doubledArray;
}

console.log(addArrays([1,1,2], [1,1,3]));
console.log(addArrays([1,2,3], [4,5,6]));

function countPositive(nums) {
  let num = 0;

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number > 0) {
      num++
    }
  }

  return num;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

