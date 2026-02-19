// src/utils/api.js

/**
 * Simulate saving an article to a database.
 * The article argument is the data from NewsAPI.
 */
export function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      ...article,
      _id: Math.random().toString(36).substr(2, 9), // Generate a fake DB ID
    });
  });
}

/**
 * Simulate deleting an article from a database.
 */
export function deleteArticle(id) {
  return new Promise((resolve) => {
    resolve({ message: "Article deleted", _id: id });
  });
}

/**
 * Simulate getting all saved articles.
 */
export function getSavedArticles() {
  return new Promise((resolve) => {
    // Return an empty array or some mock saved cards
    resolve([]); 
  });
}