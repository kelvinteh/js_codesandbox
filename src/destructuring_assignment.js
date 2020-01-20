let a,b;

const arr = [1,2,3];
[a,b] = arr;

console.log(a);
console.log(b);
console.log(arr);

const person = {
   firstName: 'Alice',
   lastName: 'Wonderland',
   age: 12,
}

let firstName, lastName, age;

({firstName, lastName, age} = person);
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(person);

const longarr = [1,2,3,5,8,13];
let [c,d,...therest] = longarr;
console.log(c);
console.log(d);
console.log(therest);
console.log(longarr);

const longhash = {
   first: "january",
   second: 'february',
   active: true,
   new: false,
   age: 99,
}
let {first: f, age: s, ...hashrest} = longhash;
console.log(longhash);
console.log(f);
console.log(s);
console.log(hashrest);