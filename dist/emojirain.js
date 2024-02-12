// emoji Rain ------->

// Array of love emojis (without the broken heart)
const loveEmojis = ['❤️', '💖', '😙', '😙', '😘', '💏', '💑', '💞', '💗', '💓', '💕', '😻', '💘', '💋', '💚', '💜', '🤎', '💛', '🤍', '🧚🏻‍♀️', '🎂', '💫', '🐣', '🐥', '🍰', '😁'];


// Function to create and animate falling emojis
function createFallingEmoji() {
  const loveEmoji = document.createElement('div');
  loveEmoji.className = 'love-emoji';
  loveEmoji.style.left = Math.random() * window.innerWidth + 'px';
  loveEmoji.textContent = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
  document.querySelector('.love-emojis').appendChild(loveEmoji);
  setTimeout(() => {
    loveEmoji.remove();
  }, 5000);
}

// Function to continuously create falling emojis
function startFallingEmojis() {
  setInterval(createFallingEmoji, 1000); // Adjust the interval as needed
}

// Start the falling emojis when the page loads
window.addEventListener('load', startFallingEmojis);