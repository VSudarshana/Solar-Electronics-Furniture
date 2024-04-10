//side-navbar

let bars = document.getElementById("bars");
let sideNav = document.getElementById("sidenav");

// Add a click event listener to the bars icon
bars.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the window
  sideNav.classList.toggle("-left-[100%]"); // Toggle the left position to show or hide the sideNav
});

// Add a click event listener to the window to close the sideNav when clicked outside
window.addEventListener("click", function (event) {
  if (event.target !== bars) {
    sideNav.classList.add("-left-[100%]"); // Hide the sideNav by adding the class that hides it
  }
});
