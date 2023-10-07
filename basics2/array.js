const arr= [1,2,3,4,5,'Ole', 'Chole', 'Bhature']
console.log(arr);

//Add element at the end index of the array
arr.push(9)
console.log(arr);

//Remove the element at end of the index
arr.pop()
console.log(arr)

//Add element at the starting of the element
arr.unshift(5)
console.log(arr);

//Remove element at the starting element
arr.shift();
console.log(arr);

//Slice a copy of the array
console.log(arr.slice(1,4));
console.log(arr);

//Splice: Slice a part from the array
console.log(arr.splice(1,4));
console.log(arr);
