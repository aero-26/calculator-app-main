"use strict";

// Display
const screen = document.getElementById("display");

// Themes
const themeSelect = document.getElementsByTagName("input")[0].click();

// Body
const body = document.getElementsByTagName("body")[0];

// Symbols
const symbol = document.getElementById("symbol");

// For calculation variables
let num1;
let num2;
let total;
let operator;

// Adding functionality to keypress
body.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    screen.textContent = "0";
    symbol.textContent = "";
  }

  if (screen.textContent.length <= 24) {
    if (e.key === "0") {
      if (
        screen.textContent.startsWith("0") &&
        !screen.textContent.includes(".")
      ) {
        return;
      } else {
        if (symbol.textContent === "") {
          push("0");
        } else {
          rmSym();
          push("0");
        }
      }
    }

    if (e.key === "1") {
      rmSym();
      push("1");
    }

    if (e.key === "2") {
      rmSym();
      push("2");
    }

    if (e.key === "3") {
      rmSym();
      push("3");
    }

    if (e.key === "4") {
      rmSym();
      push("4");
    }

    if (e.key === "5") {
      rmSym();
      push("5");
    }

    if (e.key === "6") {
      rmSym();
      push("6");
    }

    if (e.key === "7") {
      rmSym();
      push("7");
    }

    if (e.key === "8") {
      rmSym();
      push("8");
    }

    if (e.key === "9") {
      rmSym();
      push("9");
    }

    if (e.key === ".") {
      if (screen.textContent.includes(".")) {
        return;
      } else if (Number(screen.textContent) === 0) {
        rmSym();
        push("0.");
      } else {
        rmSym();
        push(".");
      }
    }
  }

  if (e.key === "*") {
    checkOperator();
    sym("*");
  }

  if (e.key === "/") {
    checkOperator();
    sym("÷");
  }

  if (e.key === "-") {
    checkOperator();
    sym("-");
  }

  if (e.key === "+") {
    checkOperator();
    sym("+");
  }

  if (e.key === "=") {
    let symbolBackup = symbol.textContent;
    if (symbolBackup) {
      cal(symbolBackup);
    }
    if (num1 || num1 === 0) {
      sym("=");
      equal();
    }
  }
});

// To push number
const push = (key) => {
  if (!screen.textContent.includes(".") && Number(screen.textContent) === 0) {
    screen.textContent = "";
  }
  screen.textContent += key;
};

// To push Symbols
const sym = (key) => {
  symbol.textContent = key;
};

// To remove Symbols
const rmSym = () => {
  if (symbol.textContent !== "") {
    if (symbol.textContent !== "=") {
      operator = symbol.textContent;
    }
    num1 = Number(screen.textContent.replaceAll(",", ""));
    symbol.textContent = "";
    screen.textContent = 0;
  }
};

// To calculate
const cal = (operatorInput) => {
  if (num1) {
    num2 = Number(screen.textContent.replaceAll(",", ""));
    if (operatorInput === "+") {
      total = num1 + num2;
      screen.textContent = total;
      num1 = total;
      num2 = undefined;
    }
    if (operatorInput === "-") {
      total = num1 - num2;
      screen.textContent = total;
      num1 = total;
      num2 = undefined;
    }
    if (operatorInput === "*") {
      total = num1 * num2;
      screen.textContent = total;
      num1 = total;
      num2 = undefined;
    }
    if (operatorInput === "÷") {
      total = num1 / num2;
      screen.textContent = total;
      num1 = total;
      num2 = undefined;
    }
  }
};

// For equal to
const equal = () => {
  if (num1 === 0 && operator === "-") {
    screen.textContent = Number(screen.textContent.replaceAll(",", "")) * -1;
  } else {
    cal(operator);
    operator = undefined;
  }
};

// Checking operator
const checkOperator = () => {
  if (operator) {
    cal(operator);
    operator = undefined;
  }
};

// Creating function for commas
const insertCommas = (input) => {
  let newNum;

  // For positive numbers
  if (!screen.textContent.includes(".") && screen.textContent[0] !== "-") {
    let numWOComma = input.replaceAll(",", "");
    let arr = [];

    if (numWOComma.length < 4) {
      newNum = numWOComma;
    }

    // For Thousand
    else if (numWOComma.length <= 5) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(0, -3);
      arr.push(hundred);
      arr.unshift(thousand);
      newNum = arr.join(",");
    }

    // For Lakhs
    else if (numWOComma.length <= 7) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(0, -5);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      newNum = arr.join(",");
    }

    // For Crore
    else if (numWOComma.length <= 9) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-9, -7);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      newNum = arr.join(",");
    }

    // For Arab
    else if (numWOComma.length <= 11) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-9, -7);
      let arab = numWOComma.slice(-11, -9);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      arr.unshift(arab);
      newNum = arr.join(",");
    }

    // For Kharab
    else if (numWOComma.length <= 13) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-9, -7);
      let arab = numWOComma.slice(-11, -9);
      let kharab = numWOComma.slice(-13, -11);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      arr.unshift(arab);
      arr.unshift(kharab);
      newNum = arr.join(",");
    }

    // For Neel
    else if (numWOComma.length <= 15) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-9, -7);
      let arab = numWOComma.slice(-11, -9);
      let kharab = numWOComma.slice(-13, -11);
      let neel = numWOComma.slice(-15, -13);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      arr.unshift(arab);
      arr.unshift(kharab);
      arr.unshift(neel);
      newNum = arr.join(",");
    } else {
      newNum = numWOComma;
    }
    return newNum;
  }

  // For negative numbers
  else if (screen.textContent[0] === "-") {
    let numWOComma = input.replaceAll(",", "");
    let arr = [];

    if (numWOComma.length <= 4) {
      newNum = numWOComma;
    }

    // For Thousand
    else if (numWOComma.length <= 6) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(0, -3);
      arr.push(hundred);
      arr.unshift(thousand);
      newNum = arr.join(",");
    }

    // For Lakhs
    else if (numWOComma.length <= 8) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(0, -5);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      newNum = arr.join(",");
    }

    // For Crore
    else if (numWOComma.length <= 10) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-10, -7);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      newNum = arr.join(",");
    }

    // For Arab
    else if (numWOComma.length <= 12) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-9, -7);
      let arab = numWOComma.slice(-12, -9);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      arr.unshift(arab);
      newNum = arr.join(",");
    }

    // For Kharab
    else if (numWOComma.length <= 14) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-9, -7);
      let arab = numWOComma.slice(-11, -9);
      let kharab = numWOComma.slice(-14, -11);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      arr.unshift(arab);
      arr.unshift(kharab);
      newNum = arr.join(",");
    }

    // For Neel
    else if (numWOComma.length <= 16) {
      let hundred = numWOComma.slice(-3);
      let thousand = numWOComma.slice(-5, -3);
      let lakh = numWOComma.slice(-7, -5);
      let crore = numWOComma.slice(-9, -7);
      let arab = numWOComma.slice(-11, -9);
      let kharab = numWOComma.slice(-13, -11);
      let neel = numWOComma.slice(-16, -13);
      arr.push(hundred);
      arr.unshift(thousand);
      arr.unshift(lakh);
      arr.unshift(crore);
      arr.unshift(arab);
      arr.unshift(kharab);
      arr.unshift(neel);
      newNum = arr.join(",");
    } else {
      newNum = numWOComma;
    }
    return newNum;
  }

  // For other cases
  else {
    return input;
  }
};

// Putting Commas
const stringNum = () => {
  if (!screen.textContent.includes("."))
    screen.textContent = insertCommas(String(screen.textContent));
};

setInterval(stringNum, 100);
