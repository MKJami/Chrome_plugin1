```javascript
const CommentSchema = {
    type: 'object',
    properties: {
        url: { type: 'string' },
        comment: { type: 'string' },
        timestamp: { type: 'string' }
    },
    required: ['url', 'comment', 'timestamp']
};

const storage = {
    saveComment: function(comment) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set({[comment.url]: comment}, function() {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    },

    loadComments: function(url) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(url, function(result) {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result[url]);
                }
            });
        });
    }
};

export { storage, CommentSchema };
```