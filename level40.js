document.addEventListener("DOMContentLoaded", function() {
    let yesButton = document.getElementById("yesButton");
    let agreementContainer = document.getElementById("agreementContainer");
    let questionContainer = document.getElementById("questionContainer");
    let fingerprintArea = document.getElementById("fingerprintArea");
    let pressFingerText = document.getElementById("pressFingerText");
    let fingerprint = document.getElementById("fingerprint");
    let finalMessage = document.getElementById("finalMessage");

    // Show agreement when "Yes" is clicked
    yesButton.addEventListener("click", function() {
        questionContainer.style.display = "none";
        agreementContainer.classList.remove("hidden");
    });

    // Handle fingerprint press
    fingerprintArea.addEventListener("click", function() {
        pressFingerText.textContent = "Signing...";
        fingerprint.classList.add("fingerprint-animate");

        // Roll up agreement and show final message after signing
        setTimeout(function() {
            agreementContainer.style.display = "none";
            finalMessage.classList.remove("hidden");
        }, 1000); // Wait for the fingerprint animation
    });
    nextPageButton.addEventListener("click", function () {
        window.location.href = "level41.html"; // Replace with your next page URL
    });
});
  
