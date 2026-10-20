const obj = {
    name: 'Object 1',
    parameters: [
        {
            name: 'Parametre 1',
            value: 10
        },
        {
            name: 'Parametre 2',
            value: 20
        }
    ]
};

const keys = Object.keys(obj);
console.log('Keys:', keys);
console.log('Keys by range:', obj[keys[0]], obj[keys[1]]);

const values = Object.values(obj);
console.log('Values:', values);

const entries = Object.entries(obj);
console.log('Entries:', entries);

const [key, value] = entries[0];
console.log('First entry key:', key);
console.log('First entry value:', value);
