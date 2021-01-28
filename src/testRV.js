let a = ["task-1", "task-2", "task-3", "task-4", "task-5"];
console.log(a.length);
let b = Array.from(a);
console.log(b);
// let c = a.splice(0,2);
// console.log(c)
console.log(a.length);
let c = a.slice(0, 2);
console.log(c);
console.log(c.length);
// let len = a.length
let d = a.slice(3, a.length);
console.log(d);
let str = ["dsferty"];
console.log("str");
let upt = c.concat(str,d);
console.log(upt);
console.log(upt.length);
