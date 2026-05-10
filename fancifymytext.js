// Function called when the "Bigger!" button is clicked
function makeBigger() {
    // Shows the alert only when the button is clicked
    alert("Hello, world!"); 
    
    // Changes the text area's font size to 24pt
    document.getElementById("myTextArea").style.fontSize = "24pt";
}

// Function called when either radio button is changed
function fancifyText() {
    // Pop up an alert to test the onchange event
    alert("Styles are changing!"); 

    let textArea = document.getElementById("myTextArea");
    let isFancy = document.getElementById("fancyRadio").checked;

    if (isFancy) {
        // Apply FancyShmancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Apply BoringBetty styles (reset to normal)
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function called when the "Moo" button is clicked
function mooify() {
    let textArea = document.getElementById("myTextArea");
    let text = textArea.value;

    // Uppercase all the text
    text = text.toUpperCase();

    // Split the text into an array of sentences based on the period character
    let parts = text.split(".");

    // Loop through the array to add "-Moo" to the end of each sentence
    for (let i = 0; i < parts.length; i++) {
        // Check if the part actually has text (ignores the empty string after the final period)
        if (parts[i].trim().length > 0) {
            parts[i] = parts[i] + "-Moo";
        }
    }

    // Join the array back into a single string with periods
    text = parts.join(".");

    // Update the text area with the new string
    textArea.value = text;
}