
let cl1 = document.querySelector("#cl1");
let cl2 = document.querySelector("#cl2");
let cloud1 = document.querySelector(".cloud1");
let cloud2 = document.querySelector(".cloud2");

let index = 0;
const strings = ["I’m not okay, Max... The water here is making me sick. It’s dirty and full of things that shouldn’t be here.", "What happened to the pond? Why is the water like this?", "It wasn’t always like this. It used to be clear, but now the factories nearby dump their waste here. It’s harder to breathe, and I can barely move. This water hurts us...", "That’s terrible! No one should have to live in this kind of water.", "It’s not just me. There are others, too. We can’t escape. If this keeps going, we won’t survive.", "I won’t let that happen, Bubbles. I’ll find out how to help you and clean the water. I promise.","Thank you, Max. You’re our only hope…"];

function next(){
    if (cloud1.classList.contains('invisible')){
        cloud1.classList.remove("invisible")
        cloud2.classList.add("invisible");
    }
    else{
        cloud2.classList.remove("invisible")
        cloud1.classList.add("invisible");
    }

    if (index % 2 === 0) {
        cl1.innerHTML = "" + strings[index];
    } else {
        cl2.textContent = strings[index];

    }

    // Increment index and reset if end of array is reached
    index++;
    if (index > strings.length) {
        window.location.href = 'level10.html';  // Start over when all strings are shown
    }
}