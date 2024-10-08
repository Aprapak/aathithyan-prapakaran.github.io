// Get the button and greeting message elements
const nameButton = document.getElementById('nameButton');
const greetingMessage = document.getElementById('greetingMessage');
const myImage = document.getElementById('myImage');

// Event listener for button click
nameButton.addEventListener('click', function() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        greetingMessage.textContent = `Welcome, ${userName}!`;
    }
});

// Event listener for image click to enlarge it
myImage.addEventListener('click', function() {
    if (myImage.style.width === '200px') {
        myImage.style.width = '400px'; // Enlarge image
    } else {
        myImage.style.width = '200px'; // Return to original size
    }
});
