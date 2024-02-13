## emojiRain Installation via CDN

### CSS
```html
<!-- emojiRain css -->
<link href="https://iamovi.github.io/emojiRain/dist/emojirain.css" rel="stylesheet">
```

### JS
```html
<!-- emojiRain JS -->
<script src="https://iamovi.github.io/emojiRain/dist/emojirain.js"></script>
```

#### Now add this div to your html body,
```html
<!-- emojiRain -->
<div class="love-emojis"></div>
```

### Add custom Emojis (Optional)
```html
<script>
  // add your desired emojis...
  EmojiRain.addCustomEmojis(['🌹', '🌈', '🐸', '🚗', '😂', '🤣', '😜', '😎']);
</script>
```

#### Style Customization
```css
/* change to your desired styles */
.love-emoji {
    position: absolute;
    animation: fall 5s linear infinite;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    left: 0;
    right: 0;
    margin: auto;
    pointer-events: none;
  }

@keyframes fall {
    0% {
      transform: translateY(-100%);
      opacity: 1;
    }
    100% {
      transform: translateY(55vh);
      opacity: 0;
    }
}
```
![emojiRain-banner](banner.gif)