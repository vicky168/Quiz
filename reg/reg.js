document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');
    
    form.addEventListener("submit", function(event) {
        
        event.preventDefault();
        var email = document.getElementById('user').value;
        var password = document.getElementById('pass').value;

        
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return;
        }

        window.location.href = "../login/login.html";
    });
});
