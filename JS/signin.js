document.addEventListener('DOMContentLoaded', function () {
        // Find the form element
        const form = document.querySelector('.page');

        // Add event listener for form submission
        form.addEventListener('submit', function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get the value of the input fields if needed
            const emailOrPhone = document.getElementById('mixedInput').value;
            const password = document.getElementById('Password').value;

            // Optionally, perform any validation on the input fields

            // Redirect to dashbroad.html
            window.location.href = "../pages/dashbroad.html";
        });
    });