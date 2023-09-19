let form = document.querySelector("form");
let nameInput = document.querySelector(".holder-name input");
let numberInput = document.querySelector(".card-number input");
let cvcInput = document.querySelector(".cvc input");
let mm = document.getElementById("mm");
let yy = document.getElementById("yy");

form.onsubmit = function () {
    toggleInput(nameInput);
    toggleInput(numberInput);
    toggleInput(cvcInput);
    validateDate(yy);
    validateDate(mm);
    validateNameAndCvc(document.querySelector("p.name"), nameInput);
    validateInputs(document.querySelector("p.number"), numberInput);
    validateInputs(document.querySelector("span.month"), mm);
    validateInputs(document.querySelector("span.year"), yy);
    validateNameAndCvc(document.querySelector("p.cvc"), cvcInput);
    if (nameInput.value.length > 0 && numberInput.value.length > 0 && cvcInput.value.length > 0 && mm.value.length > 0 && yy.value.length > 0) {
        document.querySelector(".form").style.display = 'none';
        document.querySelector(".completed").style.display = 'block';
        document.querySelector(".completed button").addEventListener("click", function () {
            window.location.reload();
        })
    }
    return false;
}


function toggleInput(input) {
    if (input.value.length === 0) {
        input.style.borderColor = 'hsl(0, 100%, 66%)';
        input.nextElementSibling.style.display = 'block';
    } else {
        input.style.borderColor = 'hsl(270, 3%, 87%)';
        input.nextElementSibling.style.display = 'none';
    }
}

function validateDate(input) {
    if (input.value.length === 0) {
        input.style.borderColor = 'hsl(0, 100%, 66%)';
        input.parentElement.nextElementSibling.style.display = 'block';
    } else {
        input.style.borderColor = 'hsl(270, 3%, 87%)';
        input.parentElement.nextElementSibling.style.display = 'none';
    }
}

function validateInputs(selector, input) {
    if (input.value.length > 0) {
        selector.textContent = input.value;
        selector.style.letterSpacing = '3px';
    }
}

function validateNameAndCvc(selector, input) {
    if (input.value.length > 0) {
        selector.textContent = input.value;
    }
}