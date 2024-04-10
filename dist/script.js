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

AOS.init();
//navbar scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY >= 100) {
    navbar.classList.add("bg-black-scroll");
  } else {
    navbar.classList.remove("bg-black-scroll");
  }
});
//smoth beahvior

  document.addEventListener("DOMContentLoaded", function() {
    // Select all links with the "href" attribute starting with "#"
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();

        // Get the target element's ID from the link's "href" attribute
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Scroll to the target element with smooth behavior
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });