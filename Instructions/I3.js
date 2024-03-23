document.addEventListener("DOMContentLoaded", function() {
    const agreeCheckbox = document.getElementById("agree-checkbox");
    const proceedLink = document.querySelector(".bt a[href='../Quiz/Quiz3.html']");
    
    // Disable the link initially
    proceedLink.classList.add("disabled");
    proceedLink.removeAttribute("href");

    // Event listener for checkbox click
    agreeCheckbox.addEventListener("click", function() {
        if (this.checked) {
            // Enable the link if checkbox is checked
            proceedLink.classList.remove("disabled");
            proceedLink.href = "../Quiz/Quiz3.html";
        } else {
            // Disable the link if checkbox is unchecked
            proceedLink.classList.add("disabled");
            proceedLink.removeAttribute("href");
        }
    });
});
