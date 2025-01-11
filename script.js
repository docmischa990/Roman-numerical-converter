// Constant Variables
const numberInput = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output")

// Roman Numerical Converter
const convertToRoman = (num) => {
  const romanMap = [
    {value: 1000, numeral: "M"},
    {value: 900, numeral: "CM"},
    {value: 500, numeral: "D"},
    {value: 400, numeral: "CD"},
    {value: 100, numeral: "C"},
    {value: 90, numeral: "XC"},
    {value: 50, numeral: "L"},
    {value: 40, numeral: "XL"},
    {value: 10, numeral: "X"},
    {value: 9, numeral: "IX"},
    {value: 5, numeral: "V"},
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"},
  ];

  let romanNumeral = "";

  romanMap.forEach(({value, numeral}) => {
    while (num >= value) {
      romanNumeral += numeral;
      num -= value;
    }
});
  return romanNumeral;
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