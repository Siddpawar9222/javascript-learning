//fatten the array [multi dimensional to a dimensional ]

const arr = [
            ['zone_1', 'zone_2'],
            ['zone_3', 'zone_4'],
            ['zone_5', 'zone_6'],
            ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
        ];

console.log(arr.flat(3));



// const obj = { 0: 'x',
//  1: 'y', 
//  2: 'z' };

// const obj1 = Object.entries(obj);
// console.log(Object.fromEntries(obj1));