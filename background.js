```javascript
import { generateQuote } from './js/quotes.js';
import { generateTip } from './js/tips.js';
import { generateTechnique } from './js/techniques.js';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getQuote') {
    sendResponse({ quote: generateQuote() });
  } else if (request.message === 'getTip') {
    sendResponse({ tip: generateTip() });
  } else if (request.message === 'getTechnique') {
    sendResponse({ technique: generateTechnique() });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ comments: [] });
});
```