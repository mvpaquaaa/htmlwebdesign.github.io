document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("scroll-progress-bar");
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Function to update the progress bar
    const updateProgressBar = () => {
        const scrollPosition = window.scrollY;
        const scrollPercentage = (scrollPosition / totalHeight) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    };

    // Initial call to set progress bar on page load
    updateProgressBar();

    // Add scroll event listener with passive option
    window.addEventListener("scroll", updateProgressBar, { passive: true });
});