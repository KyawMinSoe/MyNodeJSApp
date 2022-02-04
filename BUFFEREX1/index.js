var dbuffer1 = new Buffer(24);
var dbuffer2 = new Buffer("*", "utf8");

dbuffer1.write("Happy Birthday !","utf8");
dbuffer2.copy(dbuffer1,16);
dbuffer1.toString("utf8",0,19);

//console.log(dbuffer1);
//console.log(dbuffer2);

const arr = new Array(2);

arr[0] = 2200;
arr[1] = 44000;

const databuffer1 = Buffer.from(arr);
const databuffer2 = Buffer.from(arr.Buffer);

console.log(databuffer1);
console.log(databuffer2);