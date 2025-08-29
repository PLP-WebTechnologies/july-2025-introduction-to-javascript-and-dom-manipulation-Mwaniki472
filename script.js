
// PART 1: Variables & Conditionals
let userName = "Cynthia";
let userAge = 27;

// Conditional Example
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}


// PART 2: Custom Functions


// Function 1: Greet user
function greetUser(name) {
    return "Hello, " + name + "! Welcome to the project.";
}

// Function 2: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Call the functions in console
console.log(greetUser(userName));
console.log("5 + 7 = " + addNumbers(5, 7));

// PART 3: Loops


// Example 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop number: " + i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
    console.log("While loop count: " + counter);
    counter++;
}

// PART 4: DOM Interactions


// 1. Change text content on button click
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let greeting = document.getElementById("greeting");
    if (userAge >= 18) {
        greeting.textContent = "You are an adult, " + userName + "!";
    } else {
        greeting.textContent = "You are a minor, " + userName + "!";
    }
});

// 2. Append numbers to the list dynamically
document.getElementById("showNumbersBtn").addEventListener("click", function() {
    let list = document.getElementById("itemList");
    for (let i = 2; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = "Item " + i;
        list.appendChild(li);
    }
});

// 3. Add a new custom item
document.getElementById("addItemBtn").addEventListener("click", function() {
    let list = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.textContent = "New Custom Item";
    list.appendChild(newItem);
});
