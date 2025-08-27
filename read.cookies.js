/* Function to read cookies, get their name-value pairs, and display the name-value
   pairs in the output area */
const displayCookieValues = function() {
    // -KH Find the output area on the page.
    const outputArea = document.getElementById("output");
    // -KH Read the cookies, split them, and display them.
    const cookies = document.cookie.split(';');

    // -KH Clear any previous content in the output area
    outputArea.innerHTML = '';
    
    if (document.cookie === "") {
        outputArea.innerHTML = '<p>No registration data found.</p>';
        return;
    }
    
    // -KH Loop through the cookies and display them
    cookies.forEach(cookie => {
        const parts = cookie.split('=');
        const name = decodeURIComponent(parts[0].trim());
        const value = decodeURIComponent(parts[1].trim());

        const paragraph = document.createElement('p');
        paragraph.innerHTML = `<strong>${name}</strong>: ${value}`;
        outputArea.appendChild(paragraph);
    });
}

// Event handler called when page has loaded
window.onload = () => {
    // Add code here to call function to display cookie values
    // -KH Call the function to display cookie values.
    displayCookieValues();
}
