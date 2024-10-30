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
                // Remove the visible class when element goes out of view
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
    selectedTab.scrollIntoView({ behavior: "smooth", block: "start" });
    event.currentTarget.classList.add("active");

    // Re-observe elements in the newly opened tab to reapply fade-in effects
    const fadeInElements = selectedTab.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
        element.classList.remove("visible"); // Reset visibility on tab switch
        // Temporarily disconnect and reconnect the observer to force re-observing
        element.getBoundingClientRect(); // Force reflow
        element.classList.add("fade-in"); // Ensure fade-in is reapplied
    });
}
