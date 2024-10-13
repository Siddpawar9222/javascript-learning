const options = {
    foo: "bar",
    bar: "foo",
};

const entries = Object.entries(options);

console.log(entries);   //Gives nested array of key value pair

for (const [key, value] of entries) {
    console.log(key, value);
}

const arr =  entries.map(([key,value])=>key);
console.log(arr);



