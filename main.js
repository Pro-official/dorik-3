console.log("start");

const promise = new Promise((resolve) => {
  console.log("promise start");
  setTimeout(() => {
    resolve("done");
    console.log("promise resolve");
  }, 2000);
});

async function foo() {
  console.log("foo start");
  await promise;
  console.log("foo end");
}

async function bar() {
  console.log("bar start");
  await foo();
  console.log("bar end");
}

bar();
console.log("end");
