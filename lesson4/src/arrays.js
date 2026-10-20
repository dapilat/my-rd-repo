const arr = ['1', 2, true, null, undefined, { name: 'Object 1' }, [1, 2, 3]];
console.log('Array contents:', arr);

for (const value of arr) {
    console.log(`Value: ${value} and index: ${arr.indexOf(value)}`);
}

const filteredArr = arr.filter(value => value !== null && typeof value !== 'object');
console.log('Filtered array:', filteredArr);

const FindArr = arr.find(value => value !== null && typeof value !== 'object');
console.log('Founded value:', FindArr);

arr.push(...[1, 2, 3, 4, 5]);
console.log('Array after push:', arr);

const sortedArr = [...arr]
    .filter(value => typeof value === 'number' && !isNaN(value))
    .sort((a, b) => a - b);
console.log('Sorted array:', sortedArr);

const multipliedArr = sortedArr.map(value => value * 2);
console.log('Multiplied array:', multipliedArr);

multipliedArr.forEach(value => {
    if (value > 5) {
        console.log('Divided by 10:', value / 10);
    }
});
