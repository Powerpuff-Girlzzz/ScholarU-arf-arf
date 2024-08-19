const labelInputField = document.querySelector('#labelValue');
const form = document.querySelector('#form');
const inputType = document.querySelector('#inputType');
const submitFormButton = document.querySelector('#submitForm');

labelInputField.addEventListener('keydown', (event) => {
    const keyPressed = event.key;

    if (keyPressed === "Enter") {
        event.preventDefault();  // Prevent form submission

        const type = inputType.value;
        const label = labelInputField.value;

        if (!label) {
            alert("Please enter a title for the label.");
            return;
        }

        const labelElement = document.createElement("label");
        const div = document.createElement("div");
        const inputGroup = document.createElement("div");
        let input = null;

        if (type === 'textarea') {
            input = document.createElement("textarea");
        } else {
            input = document.createElement('input');
            input.type = type;
        }

        labelElement.innerHTML = label;
        input.name = label.replace(/\s+/g, '_');  // Set the name attribute to the label value, replacing spaces with underscores
        input.classList.add('form-control');
        labelElement.classList.add("form-label");
        div.classList.add("mb-3");
        inputGroup.classList.add("input-group");

        if (type !== 'submit') {
            inputGroup.appendChild(labelElement);
        }

        if (type === 'submit') {
            input.classList.add("btn", "btn-success");
            input.value = label;
        }

        inputGroup.appendChild(input);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "ml-2");
        deleteButton.addEventListener('click', () => {
            form.removeChild(div);
        });

        inputGroup.appendChild(deleteButton);
        div.appendChild(inputGroup);
        form.appendChild(div);

        labelInputField.value = '';  // Clear the input field
    }
});

submitFormButton.addEventListener('click', (event) => {
    event.preventDefault();  // Prevent default form submission

    // Create a new form element to capture and submit the data
    const tempForm = document.createElement('form');
    tempForm.style.display = 'none';

    // Clone the inputs from the dynamically generated form
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.type !== 'submit') {
            const clone = input.cloneNode(true);
            clone.value = input.value;
            tempForm.appendChild(clone);
        }
    });

    // Append the temporary form to the body and submit it
    document.body.appendChild(tempForm);
    tempForm.submit();
});