document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const loadingText = document.getElementById("loadingText");
    let progress = 0;

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        loadingText.textContent = `Loading... ${progress}%`;

        // When loading reaches 100%, stop the interval and redirect
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingText.textContent = "Loaded!";
            setTimeout(() => {
                window.location.href = "login.html"; // Redirect to login page
            }, 1000); // Redirect after 1 second of loading completion
        }
    }, 300); // Simulate progress increase every 300ms
});
