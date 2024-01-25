```javascript
const quotes = [
    "The best way to predict the future is to invent it.",
    "Software is a great combination between artistry and engineering.",
    "Innovation distinguishes between a leader and a follower.",
    "The function of good software is to make the complex appear to be simple.",
    "The only way to do great work is to love what you do.",
    "You can’t use up creativity. The more you use, the more you have.",
    "Simplicity is the soul of efficiency.",
    "Any sufficiently advanced technology is equivalent to magic.",
    "The science of today is the technology of tomorrow.",
    "The art challenges the technology, and the technology inspires the art."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

export { quotes, generateQuote };
```