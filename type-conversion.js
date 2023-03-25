// QUESTION: 1

const convertToNumber = function (value) {
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error("Invalid number");
  }
  return num;
};

try {
  console.log(convertToNumber("123"));
} catch (e) {
  console.log(e.message);
}
