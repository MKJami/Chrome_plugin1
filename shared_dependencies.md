1. **Exported Variables**
    - `quotes`: An array of quotes exported from `quotes.js`.
    - `tips`: An array of tips exported from `tips.js`.
    - `techniques`: An array of techniques exported from `techniques.js`.
    - `storage`: An object for handling storage operations exported from `storage.js`.

2. **Data Schemas**
    - `CommentSchema`: A schema for comments stored in Chrome Storage API, used in `storage.js`.

3. **DOM Element IDs**
    - `quoteDisplay`: The ID of the DOM element where the quote is displayed, used in `popup.html` and `popup.js`.
    - `tipDisplay`: The ID of the DOM element where the tip is displayed, used in `popup.html` and `popup.js`.
    - `techniqueDisplay`: The ID of the DOM element where the technique is displayed, used in `popup.html` and `popup.js`.
    - `commentInput`: The ID of the DOM element where users input comments, used in `popup.html` and `popup.js`.

4. **Message Names**
    - `getQuote`: A message name used to request a new quote from `background.js`.
    - `getTip`: A message name used to request a new tip from `background.js`.
    - `getTechnique`: A message name used to request a new technique from `background.js`.
    - `saveComment`: A message name used to save a comment to the Chrome Storage API from `popup.js`.

5. **Function Names**
    - `generateQuote`: A function in `quotes.js` that generates a random quote.
    - `generateTip`: A function in `tips.js` that generates a random tip.
    - `generateTechnique`: A function in `techniques.js` that generates a random technique.
    - `saveComment`: A function in `storage.js` that saves a comment to the Chrome Storage API.
    - `loadComments`: A function in `storage.js` that loads comments from the Chrome Storage API.
    - `displayQuote`: A function in `popup.js` that displays a quote in the popup.
    - `displayTip`: A function in `popup.js` that displays a tip in the popup.
    - `displayTechnique`: A function in `popup.js` that displays a technique in the popup.