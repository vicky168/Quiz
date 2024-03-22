document.addEventListener("DOMContentLoaded", function() {
    const agreeCheckbox = document.getElementById("agree-checkbox");
    const proceedButton = document.querySelector(".bt a[href='../Quiz/Quiz.html']");
    
    // Disable the proceed button initially
    proceedButton.disabled = true;

    // Event listener for checkbox change
    agreeCheckbox.addEventListener("change", function() {
        // Enable/disable the proceed button based on checkbox status
        proceedButton.disabled = !this.checked;
    });
});
