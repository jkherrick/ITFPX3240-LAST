const configureFormValidation = function() {
    // Block form submission - need to stay on same page. Note use of action="#", too, in the HTML
    document.getElementsByTagName("form").item(0).onsubmit = function(event) {
        event.preventDefault();
    }
    const submitButton = document.getElementById("reg-submit-button")
    submitButton.addEventListener("click", function() {
        // -KH Find the form by id and save the form object to a variable
        const form = document.getElementById("reg-form");
        // -KH Get the div with the id reg-result-message and save it to a variable
        const messageDiv = document.getElementById("reg-result-message");

        // -KH Call the checkPassword() function to make sure input in the password fields is valid & that they  match.
        checkPassword();

        /* Use the form's checkValidity() function to validate the form's input. Display an appropriate message
           in the div for the result message. Don't use an alert or popup for the message.
         */
        // -KH Check form validity AND write cookies and submit the form.
        if (form.checkValidity()) {
            messageDiv.textContent = "Form is valid and ready to submit!";
            writeCookieData(form);
        } else {
            messageDiv.textContent = "Please correct the invalid fields.";
        }
    })
}

// -KH This new function writes the form data to cookies and then submits the form to the next page.
const writeCookieData = function(form) {
    // -KH I added an old date to ensure cookies expire
    const oldDate = "Thu, 01 Jan 1970 00:00:00 UTC";
    // -KH Get all form inputs
    const formInputs = form.querySelectorAll('input:not([type="submit"])');
    
    // -KH Clear existing stored cookies for the form fields
    for (const input of formInputs) {
      document.cookie = `${input.id}=; expires=${oldDate}; path=/`;
    }

    // -KH Write a new cookie for each form input
    for (const input of formInputs) {
        // -KH The newsletter input is a radio button, so it's being handled separately to get the checked value.
        if (input.type === "radio" && !input.checked) {
            continue;
        }
        document.cookie = `${input.id}=${input.value}; path=/`;
    }
    // -KH This line submits the form, directing the user to the next page.
    form.submit();
}

const checkPassword = function() {
    const passwordField = document.getElementById("reg-password-input")
    const verifyPasswordField = document.getElementById("reg-password-verify-input")
    /* Clear custom validity property for password fields before checking the validity of the form */
    passwordField.setCustomValidity("")
    verifyPasswordField.setCustomValidity("")
    // Complete code compare password & verify password.
    // Use JavaScript's checkValidity() to confirm that the requirements in the HTML have been met.
    // When comparing the values in the password and password verification fields, use ===
    // Use setCustomValidity() to assign an error string when there is a problem.
    // Setting the custom validity to an empty string means the input is valid

    // -KH This if statement checks if the two password fields match.
    if (passwordField.value === verifyPasswordField.value) {
        // -KH If the passwords match, set the custom validity to an empty string to indicate validity.
        verifyPasswordField.setCustomValidity("");
    } else {
        // -KH If the passwords do not match, set a custom error message.
        verifyPasswordField.setCustomValidity("Passwords do not match.");
    }
}

// Event handler called when page has loaded
window.onload = () => {
    // -KH Call function to configure validation when page has loaded
    configureFormValidation();
}
