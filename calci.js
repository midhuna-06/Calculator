var operator = "";
var num1 = "";
var num2 = "";

function append(n) {
    if (operator === "") {
        num1 += n;
        document.getElementById("res").value = num1;
    } else {
        num2 += n;
        document.getElementById("res").value = num1 + "" + operator + "" + num2;
    }
}

function setoperator(op) {
    if (num1 !== "") {
        operator = op;
        document.getElementById("res").value = num1 + "" + operator;
    }
}

function showresult() {
    let res = 0;
    switch (operator) {
        case "+":
            res = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            res = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            res = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            if (num2 !== "0") {
                res = parseInt(num1) / parseInt(num2);
            } else {
                res = "Error"; 
            }
            break;
        default:
            res = "Error";
    }
    document.getElementById("res").value = res;
    display("Final result: " + res); 
}

function reset() {
    num1 = "";
    num2 = "";
    operator = "";
    document.getElementById("res").value = "";
    display(""); 
}

const body = document.getElementById("container");
const button = document.getElementById("button1");
const color = ["black", "blue", "pink", "yellow", "green", "violet", "whitesmoke"];

button.addEventListener("click", function () {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
});


function display(msg) {
    document.getElementById("msg").textContent = msg;
}
