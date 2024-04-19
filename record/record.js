window.onload = function () {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("mainContent");

  // Set sidebar height to match content height
  sidebar.style.height = mainContent.offsetHeight + "px";
};

