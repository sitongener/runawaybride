
const dialogue = [
    "Hello, I am your bride!",
    "Strange things have been happening lately...",
    "Will you help me uncover the mystery?",
    "I need to tell you something....",
    "Do you wanna runaway?",
    "If you said yes, you need to go see a <a href='https://help.com' target='_blank'>docter</a>.",
    "Run.",
    "What did you said?",
    "Sorry, I blank out.",
];

let index = 0;
let charIndex = 0;
let speed = 50; // Speed of text animation

function typeText() {
    let textElement = document.getElementById("dialogue-text");
    let textContent = dialogue[index];

    // This appends the next character progressively, keeping existing content intact
    textElement.innerHTML = textContent.slice(0, charIndex);

    if (charIndex < textContent.length) {
        charIndex++;
        setTimeout(typeText, speed);
    } else {
        // Enable the "Next" button after typing is complete
        document.querySelector("button").disabled = false;
    }
}

function nextDialogue() {
    // Disable the "Next" button while typing
    document.querySelector("button").disabled = true;
    charIndex = 0;
    if (index < dialogue.length - 1) {
        index++;
    } else {
        index = 0; // Loop back to first message
    }
    document.getElementById("dialogue-text").innerHTML = ""; // Clear previous text
    typeText(); // Start typing the next dialogue
}

window.onload = () => {
    document.querySelector("button").disabled = true; // Disable button initially
    typeText(); // Start the typing animation when the page loads
};


window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let percentage = scrollTop / maxScroll; // Get scroll progress (0 to 1)

    // Interpolate between RGB values (Green → Red)
    let r = Math.round(1 + percentage * (255 - 1));  // R: 1 → 255
    let g = Math.round(105 - percentage * 105);  // G: 105 → 0
    let b = Math.round(76 - percentage * 76);   // B: 76 → 0

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});



document.addEventListener('DOMContentLoaded', function() {
    // if (localStorage.getItem("scrollEnabled") === "true") {
    //     document.body.style.overflow = "auto";
    // } else {
    //     document.body.style.overflow = "hidden";
    // }

    let clickCount = 0; // Track the number of clicks
    const buttonContainer = document.getElementById('changeTextButton');
    
    // Check if the element exists
    if (!buttonContainer) {
      console.error("Element with ID 'changeTextButton' not found.");
      return;
    }
    
    const textElement = buttonContainer.querySelector('p');
    if (!textElement) {
      console.error("No <p> element found inside 'changeTextButton'.");
      return;
    }
    
    // List of words to display on each click
    const words = [
      "Hello",
      "Do you see me?",
      "I see you......",
      "Run!"
    ];
  
    // Event listener for image button click
    buttonContainer.addEventListener('click', function() {
        clickCount++; // Increment the click count
  
        // Change the text below the image based on click count
        if (clickCount <= 3) {
            textElement.textContent = words[clickCount - 1];
        } else if (clickCount === 4) {
        
            window.location.href = "./eyes/eyes.html"; // Update with correct path
        }
    });
  });

 //right scroll image control
 window.addEventListener("scroll", function() {
    // Get the vertical scroll value
    const scrollY = window.scrollY;
    
    // Calculate horizontal oscillation using sine function
    const amplitude = 100; // pixels to move left and right
    const frequency = 350; // adjust speed of oscillation
    const oscillation = Math.sin(scrollY / frequency) * amplitude;
    const flip = Math.sin(scrollY / (frequency / 2)) > 0 ? 1 : -1;
    
    // Select the image container
    const image = document.querySelector(".runawayrightimg");
  
    // Only apply horizontal movement (left & right)
    image.style.transform = `translateX(calc(-50% + ${oscillation}px))`;
    image.style.transform = `scaleX(${flip}) translateX(${oscillation}px)`;
  });
  