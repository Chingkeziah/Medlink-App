window.onload = function () {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("mainContent");

  // Set sidebar height to match content height
  sidebar.style.height = mainContent.offsetHeight + "px";
};

// document.addEventListener("DOMContentLoaded", function() {
//   const cards = document.querySelectorAll('.cards > div');
//   const formContainer = document.getElementById('formContainer');

//   cards.forEach(card => {
//     card.addEventListener('click', function() {
//       toggleFormVisibility();
//     });

//     card.addEventListener('mouseenter', function() {
//       toggleFormVisibility();
//     });

//     card.addEventListener('mouseleave', function() {
//       formContainer.style.display = 'none';
//     });
//   });

//   function toggleFormVisibility() {
//     if (formContainer.style.display === 'block') {
//       formContainer.style.display = 'none';
//     } else {
//       formContainer.style.display = 'block';
//     }
//   }
// });

//function for form visibility
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards > div");
  const formContainer = document.getElementById("formContainer");
  let formVisible = false;

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      toggleFormVisibility();
    });

    card.addEventListener("mouseenter", function () {
      toggleFormVisibility();
    });

    card.addEventListener("mouseleave", function () {
      if (!formVisible) {
        formContainer.style.display = "none";
      }
    });
  });

  function toggleFormVisibility() {
    if (!formVisible) {
      formContainer.style.display = "block";
      formVisible = true;
    } else {
      formVisible = false;
    }
  }
});

//function for form submission
document.getElementById("submitBtn").addEventListener("click", function () {
  // Redirect the user to the desired page
  window.location.href = "/records/reports.html";
});
