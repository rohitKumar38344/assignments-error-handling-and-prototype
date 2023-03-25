// QUESTION: 2

const getPerson = function (obj) {
  if ("name" in obj && "age" in obj) {
    return `Name: ${obj.name}, Age: ${obj.age}`;
  } else {
    throw new Error("Invalid parameter type");
  }
};

try {
  console.log(getPerson({ test: "max", age: 20 }));
} catch (e) {
  console.log(e.message);
}
