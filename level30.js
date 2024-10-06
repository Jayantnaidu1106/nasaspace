document.addEventListener("DOMContentLoaded", function() {
    let optionA = document.getElementById("optionA");
    let optionB = document.getElementById("optionB");
    let factBox = document.getElementById("factBox");
    let knowWhyBtn = document.getElementById("knowWhyBtn");
    let reasonText = document.getElementById("reasonText");
    let nextPage = document.getElementById("nextPage");
    let letterText = document.getElementById("letterText");
    let enterLevel3Btn = document.getElementById("enterLevel3Btn");
    let questionContainer = document.getElementById("questionContainer");

    // Handle answer selection
    optionA.addEventListener("click", function() {
        factBox.style.display = "block"; // Show the fact box when correct answer is selected
    });

    optionB.addEventListener("click", function() {
        alert("Try Again!");
    });

    // Handle 'Wanna Know Why' button click
    knowWhyBtn.addEventListener("click", function() {
        reasonText.style.display = "block"; // Reveal the reason text
        setTimeout(showNextPage, 8000); // Show next page after 3 seconds
    });

    // Function to transition to the next page
    function showNextPage() {
        questionContainer.style.display = "none"; // Hide the question part
        nextPage.classList.remove("hidden"); // Show next page content
        revealTextOneByOne("But how to clean this? My fishy can't live here. Idea! Why not pick up trash here. Let's go.");
    }

    // Function to reveal text one letter at a time
    function revealTextOneByOne(text) {
        let index = 0;
        let interval = setInterval(function() {
            letterText.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                enterLevel3Btn.classList.remove("hidden"); // Show 'Enter Level 3' button after text is revealed
            }
        }, 100); // Reveal each letter every 100ms
    }

    // Handle 'Enter Level 3' button click
    enterLevel3Btn.addEventListener("click", function() {
        window.location.href = 'level30.html'; // Redirect to Level 3 (change URL accordingly)
    });
});
