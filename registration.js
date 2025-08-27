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
        // -KH This if/else statement checks if the form is valid and displays a message if not. 
        // -KH I intended this to prevent submission of the form if there are no inputs, but learned that
        // -KH for it to fire, I'd need to bypass browser validation, which I didn't want to do. I left
        // -KH it in to show my thought process.
        if (form.checkValidity()) {
            messageDiv.textContent = "Form is valid and ready to submit!";
        } else {
            messageDiv.textContent = "Please correct the invalid fields.";
        }
    })
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
    // -KH Add code here to call function to configure validation when page has loaded
    configureFormValidation();
}
