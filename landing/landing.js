window.onload = function () {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("wrapper");
   
    // Set sidebar height to match content height
  sidebar.style.height = wrapper.offsetHeight + "px";
  };

// creating a pop up that prevents a user from navigating to any other page except the login and sign up
  document.addEventListener("DOMContentLoaded", function() {
    const navigationLinks = document.querySelectorAll('.pages li:nth-child(-n+3) a');

    // Add event listener to each navigation link
    navigationLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent default navigation behavior
            event.preventDefault();
            
            // Check if user is logged in (replace this condition with your login logic)
            const isLoggedIn = false; // Set to true if user is logged in

            // If user is not logged in, display a popup or redirect to login page
            if (!isLoggedIn) {
                alert("Please login or sign up to access this page.");
                // Alternatively, redirect to the login page:
                // window.location.href = "/login.html";
            } else {
                // If user is logged in, navigate to the destination page
                const destinationURL = event.target.getAttribute('href');
                window.location.href = destinationURL;
            }
        });
    });
});


// navigating to the signup page from the get started button
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var button = document.getElementById("myButton");

    // Add event listener to the button
    button.addEventListener("click", function() {
        // Navigate to the desired URL when the button is clicked
        window.location.href = "./files/signup.html";
    });
});
