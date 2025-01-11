// Constant Variables
const numberInput = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output")

// Roman Numerical Converter
const convertToRoman = (num) => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

// Number Validation
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value)

  if(!numberInput.value || isNaN(inputInt)) {
    errorMsgStyle(output, "Please enter a valid number");
    return false;
  } 

  else if(inputInt < 1) {
    errorMsgStyle(output, "Please enter a number greater than or equal to 1");
    return false;
  }

  else if(inputInt > 3999) {
    errorMsgStyle(output, "Please enter a number less than or equal to 3999");
    return false;
  }
  
  output.textContent = convertToRoman(inputInt);
  output.style = "";
  numberInput.value = "";
  return true;  
};

// Error Message Styling
const errorMsgStyle = (element, message) => {
  element.textContent = message;
  element.style.color = "red";
  element.style.fontSize = "0.9rem";
  element.style.letterSpacing = "2px";
};

// Event Listeners
button.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkUserInput();
  }
});