document.addEventListener("DOMContentLoaded", function () {
    const bookNowButtons = document.querySelectorAll(".btn1");
    const detailsButtons = document.querySelectorAll(".btn2");

    bookNowButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("Book now button clicked");
        });
    });

    // Adding event listeners to details buttons
    detailsButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("Details button clicked");
        });
    });
});
