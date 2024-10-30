// Intersection Observer for fade-in elements
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observerOptions = {
        threshold: 0.1,
    };

    const fadeInOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    fadeInElements.forEach((element) => {
        fadeInOnScroll.observe(element);
    });

    // Default tab opening
    const defaultTab = document.querySelector(".tablinks");
    if (defaultTab) {
        defaultTab.click();
    }
});

// Function to open tabs
function openTab(event, tabName) {
    const tabContents = document.querySelectorAll(".tabcontent");
    tabContents.forEach((content) => {
        content.style.display = "none";
    });

    const tabLinks = document.querySelectorAll(".tablinks");
    tabLinks.forEach((link) => {
        link.classList.remove("active");
    });

    const selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";
    event.currentTarget.classList.add("active");

    // Apply scrollIntoView only on small screens to avoid bouncing effect
    if (window.innerWidth <= 600) {
        selectedTab.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Re-observe elements in the newly opened tab
    const fadeInElements = selectedTab.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
        element.classList.remove("visible");
        element.classList.add("fade-in");
    });
}
