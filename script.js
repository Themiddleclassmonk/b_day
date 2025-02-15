const startButton = document.getElementById('startButton');
const secondButton = document.getElementById('secondButton');
const bottomLeftButton = document.getElementById('bottomLeftButton');
const bottomRightButton = document.getElementById('bottomRightButton');
const message = document.getElementById('message');
const container = document.querySelector('.container');

const messages = [
    "Happy birthday my love ❤️!",
    "You are the best thing that ever happened to me my love!",
    "Keep smiling, I love it when you smile watching me my love!",
    "I wish you would get all you want this year!",
    "Oh! Is that me you want? 😘",
    "I love you more than anything my love",
    "I am sorry bb that I am not there for your birthday, but I will always be with you in all your upcoming birthdays",
    "I will always be with you my love",
    "Have a very very very happy birthday my love ❤️",
    "I love you sooo much my love",
    "Now you can talk to me darling"
];

let messageIndex = 0;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function showMessage() {
    if (messageIndex < messages.length) {
        message.textContent = messages[messageIndex];
        message.style.opacity = 1;
        messageIndex++; // Move to the next message for the next button press
    }
}

function bombardHearts() {
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
}

function handleButtonClick(button) {
    bombardHearts();
    showMessage();
    if (button !== startButton) {
        button.classList.add('hidden');
        setTimeout(() => {
            button.classList.remove('hidden');
        }, 3000);
    }
}

startButton.addEventListener('click', () => {
    handleButtonClick(startButton);
    startButton.remove(); // Permanently remove the center button
    setTimeout(() => {
        secondButton.classList.remove('hidden');
    }, 3000);
});

secondButton.addEventListener('click', () => handleButtonClick(secondButton));
bottomLeftButton.addEventListener('click', () => handleButtonClick(bottomLeftButton));
bottomRightButton.addEventListener('click', () => handleButtonClick(bottomRightButton));
