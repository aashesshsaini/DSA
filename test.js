// const str = "hello world";
// create a function to get all alphabets and how many times they are invoked

// const expandAlphabets = (str) => {
//   const map = new Map();
//   for (let char of str) {
//     if (char !== " ") {
//       console.log(char);
//       map.set(char, (map.get(char) || 0) + 1);
//       console.log(map);
//     }
//   }

//   return map;
// };

// const result = expandAlphabets(str);

// for (let [key, value] of result) {
//   console.log(`${key} invoked ${value} in str ${str}`);
// }

// Left rotate an array by one place

// nums = [1, 2, 3, 4, 5];
// Output: [2, 3, 4, 5, 1];

// let arr = [1, 2, 3, 4, 5];

/*
Day	Balance Start	Daily Interest	Balance End
Day 1	₹10,000.00	₹1.51	₹10,001.51
Day 2	₹10,001.51	₹1.51	₹10,003.02
Day 3	₹10,003.02	₹1.51	₹10,004.53
...	...	...	...
Day 30	~₹10,045.35	₹1.53	~₹10,046.88

*/

// let rateOfInterest = 5.5;
// let amount = 10000;

// const sliceCalculation = (rateOfInterest, amount) => {
//   rateOfInterest = 5.5 / 365 / 100;
//   for (let j = 1; j < 12; j++) {
//     for (let i = 1; i <= 30; i++) {
//       amount = amount + amount * rateOfInterest;
//     }
//     amount = amount + 10000;
//   }
//   return amount;
// };

// const result = sliceCalculation(rateOfInterest, amount);

// console.log({ result });

// let a = [1, 2, 3, 4];
// a[1] = 5;
// const b = [1, 2, 3, 4];
// b[1] = 5;

// console.log({ a, b });

// const user = {
//   name: "Aashish",
//   greet() {
//     console.log("Hello " + name);
//   },
// };

// user.greet();

// const lodash = require("lodash");

// const original = { name: "Ash", address: { city: "mzn" } };
// let copy = {};
// copy = Object.assign(copy, original);
// copy = { ...original };
// copy.name = "changed";
// console.log({ copy, original });

// console.log(original.hasOwnProperty("city"));

// console.log(Object.fromEntries(Object.entries(original)));

// Object.defineProperty(original, "salary", {
//   value: 45000,
//   writable: false,
//   enumerable: true,
// });

// original.salary = 50000;

// console.log(original);

// console.log(Object.entries(original));
// console.log(Object.keys(original));
// console.log(Object.values(original));

// for (let key in original) {
//   console.log(key, original[key]);
// }

// const shallowCopy = original;

// shallowCopy = { ...original };
// shallowCopy.name = "Changed";
// shallowCopy.address.city = "mandi house";
// console.log({ original });
// console.log({ shallowCopy }); // "Changed" (because both point to same memory)

// Deep Copy
// const deepCopy = JSON.parse(JSON.stringify(original));
// const deepCopy = lodash.cloneCopy(original);

// deepCopy.name = "Aashish";
// deepCopy.address.city = "Meerut";

// console.log({ original });
// console.log({ deepCopy });

1;
// const user = {
//   firstName: "Aashish",
//   lastName: "Saini",
//   age: 25,
//   email: "aashish@example.com",
// };

// "Name: Aashish Saini | Age: 25 | Email: aashish@example.com"

// function getUserSummary(user) {}

// const result = getUserSummary(user);

2;
// Task: Write a function calculateTotal(cart) that returns the total cart price.

// const cart = [
//   { name: "Shirt", price: 1200, quantity: 2 },
//   { name: "Jeans", price: 2500, quantity: 1 },
// ];

// function calculateTotal(cart) {
//   const total = cart.reduce((acc, item) => {
//     acc = acc + item.price;
//     console.log({ acc });
//     return acc;
//   }, 0);
//   return total;
// }

// const result = calculateTotal(cart);

3;
//  Convert this array into an object where key = id, value = full user object.
// const users = [
//   { id: 1, name: "Aashish" },
//   { id: 2, name: "Rohan" },
// ];

// Output:
// {
//     1: { id: 1, name: "Aashish" },
//     2: { id: 2, name: "Rohan" }
//   }

// let obj = {};

// users.forEach((item) => {
//   obj[item.id] = item;
// });

// console.log({ obj });

4;
//Return a new object with only active users.

// const users = {
//   a1: { name: "Ash", active: true },
//   b2: { name: "John", active: false },
//   c3: { name: "Rahul", active: true },
// };

// let newObj = {};

// for (let key in users) {
//   const newValue = users[key];
//   if (newValue.active === true) {
//     newObj[key] = newValue;
//   }
// }

// console.log(newObj);

5;
// Group them like

// const users = [
//   { name: "Ash", role: "admin" },
//   { name: "John", role: "user" },
//   { name: "Sita", role: "admin" },
// ];

// {
//   admin: [ "Ash", "Sita" ],
//   user: [ "John" ]
// }

// const date = new Date();
// const localdate = date.toISOString();
// console.log({ date, localdate });
