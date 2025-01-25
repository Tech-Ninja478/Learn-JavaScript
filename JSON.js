const myObj = {
  name: "Aditya",
  hobbies: ["eat", "travel", "read"],
  hello: function () {
    console.log("Hello");
  },
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);
