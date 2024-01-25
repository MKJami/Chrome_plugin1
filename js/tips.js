```javascript
// Array of tips
const tips = [
    "Tip 1: Always write clean and understandable code.",
    "Tip 2: Keep your functions small and focused.",
    "Tip 3: Use meaningful names for variables and functions.",
    "Tip 4: Always comment your code.",
    "Tip 5: Regularly backup your code.",
    "Tip 6: Test your code thoroughly.",
    "Tip 7: Keep learning and improving your skills.",
    "Tip 8: Stay updated with the latest technologies.",
    "Tip 9: Collaborate and learn from other developers.",
    "Tip 10: Take breaks to avoid burnout."
];

// Function to generate a random tip
function generateTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

// Export the tips array and generateTip function
export { tips, generateTip };
```