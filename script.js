"use strict";

// Making screen
const screen = document.getElementById("display");

const themeSelect = document.getElementsByTagName("input")[0].click();

// Assiging variable
const num = [];
let stop = "no";
let total;

// Checking valid Input
screen.addEventListener(
  "keydown",
  (e) => {
    //Reset backspace
    if (e.key === "Backspace") {
      stop = "no";
      screen.value = 0;
    }

    // If the number is already 0 change it to current number

    if (Number(e.key) && screen.value === "0") {
      screen.value = "";
    }

    // If the number is showing total change it to empty string
    if (Number(e.key) && total == screen.value) {
      stop = "no";
      screen.value = "";
    }

    if (e.key === "*") {
      let temp = Number(screen.value);
      e.preventDefault();
      if (stop === "no") {
        num.push(temp);
        num.push("*");
        screen.value = 0;

        if (total) {
          total *= temp;
          screen.value = total;
          stop = "yes";
        } else {
          total = temp;
          screen.value = 0;
        }
      }
    }
    console.log(num);
    console.log(e.key);
  }
  // e.key === "-" ||
  // e.key === "/" ||
  // e.key === "+" ||
  // e.key === "="
);
