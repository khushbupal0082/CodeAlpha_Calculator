const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        switch (value) {

            case "AC":
                expression = "";
                display.value = "";
                break;

            case "DEL":
                expression = expression.slice(0, -1);
                display.value = expression;
                display.scrollLeft = display.scrollWidth;
                break;

            case "=":
                try {

                    expression = eval(expression).toString();
                    display.value = expression;
                    display.scrollLeft = display.scrollWidth;

                } catch {

                    display.value = "Error";
                    expression = "";

                }
                break;

            default:
                expression += value;
                display.value = expression;
                display.scrollLeft = display.scrollWidth;

        }

    });

});

// Keyboard Support

document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        expression += key;
        display.value = expression;
        display.scrollLeft = display.scrollWidth;
    }

    else if (key === "Enter") {
        e.preventDefault();

        try {

            expression = eval(expression).toString();
            display.value = expression;
            display.scrollLeft = display.scrollWidth;

        } catch {

            display.value = "Error";
            expression = "";

        }
    }

    else if (key === "Backspace") {
        expression = expression.slice(0, -1);
        display.value = expression;
        display.scrollLeft = display.scrollWidth;
    }

    else if (key === "Escape") {
        expression = "";
        display.value = "";
    }

});