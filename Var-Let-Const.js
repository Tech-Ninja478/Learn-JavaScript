var x = 5;
let y = 10;
const z = 15;

console.log(`Global: ${x}`);
console.log(`Global: ${y}`);
console.log(`Global: ${z}`);

function myFunc() {
  var x = 12;
  let y = 15;
  const z = 18;
  {
    var x = 20;
    let y = 22;
    const z = 24;

    console.log(`Block: ${x}`);
    console.log(`Block: ${y}`);
    console.log(`Block: ${z}`);
  }

  console.log(`Function: ${x}`);
  console.log(`Function: ${y}`);
  console.log(`Function: ${z}`);
}

myFunc();
