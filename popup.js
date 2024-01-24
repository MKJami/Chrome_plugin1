```javascript
import { quotes, tips, techniques, storage } from './js/storage.js';

document.addEventListener('DOMContentLoaded', function() {
    displayQuote();
    displayTip();
    displayTechnique();
    loadComments();
});

function displayQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quote = generateQuote(quotes);
    quoteDisplay.textContent = quote;
}

function displayTip() {
    const tipDisplay = document.getElementById('tipDisplay');
    const tip = generateTip(tips);
    tipDisplay.textContent = tip;
}

function displayTechnique() {
    const techniqueDisplay = document.getElementById('techniqueDisplay');
    const technique = generateTechnique(techniques);
    techniqueDisplay.textContent = technique;
}

function loadComments() {
    const comments = storage.loadComments();
    const commentInput = document.getElementById('commentInput');
    commentInput.value = comments.join('\n');
}

document.getElementById('commentInput').addEventListener('change', function() {
    const commentInput = document.getElementById('commentInput');
    const comments = commentInput.value.split('\n');
    storage.saveComment(comments);
});
```