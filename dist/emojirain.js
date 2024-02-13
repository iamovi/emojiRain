// emoji Rain ------->

const EmojiRain = {
  // Array of default love emojis
  defaultLoveEmojis: ['❤️', '💖', '😙', '😙', '😘', '💏', '💑', '💞', '💗', '💓', '💕', '😻', '💘', '💋', '💚', '💜', '🤎', '💛', '🤍', '🧚🏻‍♀️', '🎂', '💫', '🐣', '🐥', '🍰', '😁'],

  // Array of custom love emojis
  customLoveEmojis: [],

  // Function to add custom emojis
  addCustomEmojis: function(emojis) {
    this.customLoveEmojis.push(...emojis);
  },

  // Function to create and animate falling emojis
  createFallingEmoji: function() {
    const allEmojis = this.customLoveEmojis.length > 0 ? this.customLoveEmojis : this.defaultLoveEmojis;
    const loveEmoji = document.createElement('div');
    loveEmoji.className = 'love-emoji';
    loveEmoji.style.left = Math.random() * window.innerWidth + 'px';
    loveEmoji.textContent = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    document.querySelector('.love-emojis').appendChild(loveEmoji);
    setTimeout(() => {
      loveEmoji.remove();
    }, 5000);
  },

  // Function to continuously create falling emojis
  startFallingEmojis: function() {
    setInterval(this.createFallingEmoji.bind(this), 1000); // Adjust the interval as needed
  }
};

// Start the falling emojis when the page loads
window.addEventListener('load', EmojiRain.startFallingEmojis.bind(EmojiRain));
