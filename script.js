let Calculate = () => {

    // ----- Get Html input values -----

    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let val = document.getElementById("val").value;


    let result;  // Define result variable 

    if (val === "sum") {
        result = sum(num1, num2);
    }
    else if (val === "minus") {
        result = minus(num1, num2);
    }
    else if (val === "multiply") {
        result = multiply(num1, num2);
    }
    else if (val === "divide") {
        result = divide(num1, num2);
    }

    console.log(result);

    document.getElementById('result').innerHTML = result;
};


// ----------------Functions----------------

let sum = (num1, num2) => {
    return num1 + num2;
};

let minus = (num1, num2) => {
    return num1 - num2;
};

let multiply = (num1, num2) => {
    return num1 * num2;
};

let divide = (num1, num2) => {
    return (num1 / num2).toFixed(3);
};
