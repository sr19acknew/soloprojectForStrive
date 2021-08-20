let x = "John";
let y = "Doe";

console.log(x + "<>" + y);

const person = {
  name: "Luis Antonio",
  surname: "Canettoli OrdoÃ±ez",
  email: "hello@luisanton.io",
};

delete person.email;

console.log(person);

let myArray = [];

for (let i = 0; i < 10; i++) {
  myArray.push("New value: " + i);
}

console.log(myArray);

for (let string of myArray) {
  console.log(string);
}

let randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(Math.round(Math.random() * 100));
}

console.log(randomNumbers);

function getMaxMin(numbers) {
  let max = numbers[0];
  let min = numbers[0];

  for (let number of numbers) {
    max = number > max ? number : max;
    min = number < min ? number : min;
  }

  return { max, min };
}

console.log(getMaxMin(randomNumbers));

let arrayOfArrays = [];

for (let i = 0; i < 10; i++) {
  let innerArray = [];
  for (let j = 0; j < 10; j++) {
    innerArray.push(Math.round(Math.random() * 10));
  }
  arrayOfArrays.push(innerArray);
}

console.log(arrayOfArrays);

function returnLargest(array1, array2) {
  return array1.length >= array2.length ? array1 : array2;
}
console.log(returnLargest([1, 2], [1, 2, 3]));

function returnLargestSum(array1, array2) {
  let sum1 = 0;

  for (let number of array1) {
    sum1 += number;
  }

  let sum2 = 0;

  for (let number of array2) {
    sum2 += number;
  }

  return sum1 >= sum2 ? sum1 : sum2;
}

console.log(returnLargestSum([100, 999], [10000, 2, 3, 4]));

// DOM

// 31) Get element with ID "container" from the page
const container = document.getElementById("container");
// 32) Get every "td" from the page
const tds = document.querySelectorAll("td");
// 33) Create a cycle that prints the text inside every td of the page
tds.forEach((td) => {
  td.innerText = "text";
});
// 34) Write a function to change the heading of the page
const changeH1 = function (content) {
  const h1 = document.querySelector("h1");
  h1.innerText = content;
};
changeH1("new text");
// 35) Write a function to add an extra row to the table
const addRow = function () {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");
  for (let i = 0; i < 5; i++) {
    const td = document.createElement("td");
    td.innerText = i + 1;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
};
addRow();
// 36) Write a function to add the class "test" to each row in the table
const addClassToRow = function () {
  const trs = document.querySelectorAll("tr");
  trs.forEach((tr) => {
    tr.classList.add("test");
  });
};
// 37) Write a function to add a red background to every link in the page
const addRedBg = function () {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.classList.add("bg-red");
  });
};
addRedBg();
// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
  console.log("Page loaded");
};
// 39) Write a function to add new items to a UL
const addLi = function () {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = "new list item";
  ul.appendChild(li);
};
addLi();
// 40) Write a function to empty a list
const emptyList = function () {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
};
emptyList();

// EXTRA

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
const alertUrl = function () {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.onmouseenter = function (e) {
      alert(e.target.href);
    };
  });
};
//alertUrl();
// 42) Add a button to hide every image on the page
const hideImages = function () {
  const btn = document.createElement("button");
  btn.innerText = "Hide images";
  btn.onclick = function () {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      img.classList.add("d-none");
    });
  };
  const body = document.querySelector("body");
  body.appendChild(btn);
};
hideImages();
// 43) Add a button to hide and show the table from the page
const toggleTable = function () {
  const btn = document.createElement("button");
  btn.innerText = "Toggle table";
  btn.onclick = function () {
    const table = document.querySelector("table");
    table.classList.toggle("d-none");
  };

  const body = document.querySelector("body");
  body.appendChild(btn);
};
toggleTable();
// 44) Write a function to sum every number inside the TD (if the content is numeric)
const sumNumbers = function () {
  const tds = document.querySelectorAll("td");
  let sum = 0;
  tds.forEach((td) => {
    const toNumber = parseInt(td.innerText);
    const isNotNumeric = isNaN(toNumber);
    if (!isNotNumeric) {
      sum += toNumber;
    }
  });
  alert(sum);
};
//sumNumbers();

// 45) Delete the last letter from the title each time the user clicks on it
const deleteLastChar = function () {
  const h1 = document.querySelector("h1");
  h1.onclick = function (e) {
    h1.innerText = h1.innerText.substring(0, h1.innerText.length - 1);
  };
};
deleteLastChar();
// 46) Change a single TD background color when the user clicks on it
const changeTdBg = function () {
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    td.onclick = function (e) {
      e.target.classList.toggle("bg-red");
    };
  });
};
//changeTdBg();

// 47) Add a button DELETE, on click it should delete a random TD from the page
const deleteRandom = function () {
  const btn = document.createElement("button");
  btn.innerText = "Delete random";
  btn.onclick = function () {
    const tds = document.querySelectorAll("td");
    const random = Math.floor(Math.random() * tds.length);
    tds[random].remove();
  };
  const body = document.querySelector("body");
  body.appendChild(btn);
};
deleteRandom();
// 48) Add a pink border to a cell when the mouse is over it
const addPinkBorder = function () {
  const cells = document.querySelectorAll("td");
  cells.forEach((td) => {
    td.onmouseenter = function (e) {
      e.target.classList.add("border-pink");
    };
    td.onmouseleave = function (e) {
      e.target.classList.remove("border-pink");
    };
  });
};
addPinkBorder();

const createTable = function () {
  const body = document.querySelector("body");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  body.appendChild(table);
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < 3; j++) {
      if (i === 0) {
        const th = document.createElement("th");
        th.innerText = "Heading " + (j + 1);
        tr.appendChild(th);
      } else {
        const td = document.createElement("td");
        td.innerText = `Row ${i} Col ${j + 1}`;
        tr.appendChild(td);
      }
    }
  }
};
createTable();
// 50) Write a function to remove the table from the page
const removeTable = function () {
  const table = document.querySelectorAll("table")[1];
  table.remove();
};
//removeTable();
