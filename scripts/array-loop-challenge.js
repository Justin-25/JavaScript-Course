function minMax(nums) {
  
  if (nums.length === 0) {
    return {
      min: null,
      max: null
    };
  }

  const object = {
    min: nums[0], 
    max: nums[0]
  };

  for (let i = 0; i < nums.length; i++) {

    if(nums[i] < object.min) {
      object.min = nums[i]
    } else if (nums[i] > object.max) {
      object.max = nums[i]
    }
  }

  return object;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));


function countWords(words) {
  const variableObject = {}; // We create an empty object

  for (let i = 0; i < words.length; i++) {
    if (variableObject[words[i]] === undefined) {
      variableObject[words[i]] = 1; // If it doesn't exist it will be equal to 1
    } else {
      variableObject[words[i]] += 1; // If it exist it will be plus 1
    }
  }

  return variableObject;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));