// Form validation and submission
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

   
    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;
    
    if (email.trim() === "") {
        alert("Please enter your email.");
        return;
    }
    
    if (password.trim() === "") {
        alert("Please enter your password.");
        return;
    }
    
    // Simulated backend validation
    const isValidUser = validateUser(email, password);
    
    if (!isValidUser) {
        alert("Invalid email or password.");
        return;
    }
    
    // If login is successful, redirect to the home page
    window.location.href = "/home/home.html";
 

    if (!isValidUser) {
        alert("Invalid email or password.");
        return;
        
    }
})
 
// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("psw");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    togglePassword.classList.toggle("fa-eye-slash", type === "password");
    togglePassword.classList.toggle("fa-eye", type === "text");
});

// Simulated backend user validation
function validateUser(email, password) {
    const users = [
        { email: "admin@yahoo.com", password: "Admin123" },
        { email: "test@yahoo.com", password: "test123" }
    ];

    // Check if there's a user with the provided email and password
    return users.some(user => user.email === email && user.password === password);
}
