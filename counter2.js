document.getElementById("countButton").addEventListener("click", function() {
    // Get the input text from the textarea
    var inputText = document.getElementById("inputbox").value;

    // If the input text is empty, set all counts to zero and return
    if (inputText.trim() === "") {
        document.getElementById("words").value = 0;
        document.getElementById("chars").value = 0;
        document.getElementById("alphabets").value = 0;
        document.getElementById("numbers").value = 0;
        return;
    }

        // Count words
    var words = inputText.trim().split(/\s+/).length;

    // Count characters
    var characters = inputText.length;

    // Count alphabets
    var alphabets = inputText.replace(/[^a-zA-Z]/g, "").length;

    // Count numbers
    var numbers = inputText.replace(/\D/g, "").length;

    // Update the values in the output fields
    document.getElementById("words").value = words;
    document.getElementById("chars").value = characters;
    document.getElementById("alphabets").value = alphabets;
    document.getElementById("numbers").value = numbers;
});
