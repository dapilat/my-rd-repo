const arr = [1, 3, 5, 6, 8, 9, 10];
for (const value of arr) {
    console.log(`Value: ${value} and index: ${arr.indexOf(value)}`);
}

for (let i = 0; i < arr.length; i++) {
    console.log(`Value: ${arr[i]} and index: ${i}`);
}

const arr2 = [];
const reverseArr = arr.reverse();
for (const value of reverseArr) {
    console.log(`iteration: ${reverseArr.indexOf(value)}`);
    if (value % 2 === 0 && arr2.length < 3) {
        arr2.push(value);
    } else if (arr2.length >= 3) {
        break;
    }
};
console.log('arr2:', arr2);

const arr3 = [];
for (let i = 0; i < arr.length; i++) {
    console.log(`iteration: ${i}`);
    if (arr[i] % 2 === 0) {
        if (arr[i] > 6) {
            continue;
        }
        arr3.push(arr[i]);
    }
}
console.log('arr3:', arr3);

let i = 0;
while (i < arr.length) {
    console.log(`iteration: ${i}`);
    i++;
}

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
while (newArray.length > 0) {
    const value = newArray.pop();
    console.log(`Value: ${value} and index: ${newArray.length}`);
}
console.log('newArray:', newArray);

let j = 0;
do {
    console.log(`iteration: ${j} and value: ${arr[j]}`);
    j++;
}
while (j < arr.length);

