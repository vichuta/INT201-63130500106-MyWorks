//1. synchronous task
// console.log(`hello`);
// console.log(`world, `);
// console.log(`Good bye`);

//2. asynchronous task
console.log(`hello`);
//setTimeout=asynchronous function
let num = 0;
async function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`world, `);
      resolve(10);
    }, 3000);
  });
}

async function getNum() {
  num = await delay();
  console.log(`Good bye: ${num}`);
}
getNum();
