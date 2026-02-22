// src/utils/api.js

/**
 * Simulates an API call to save an article to the database.
 * @param {Object} article - The article data received from NewsAPI.
 * @returns {Promise} - Resolves with the article and a unique database ID.
 */
export function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      ...article,
      _id: Math.random().toString(36).substring(2, 11),
    });
  });
}

/**
 * Simulates an API call to remove an article from the database.
 * @param {string} id - The unique ID of the article to be deleted.
 * @returns {Promise} - Resolves with a success message and the deleted ID.
 */
export function deleteArticle(id) {
  return new Promise((resolve) => {
    resolve({ message: "Article successfully deleted", _id: id });
  });
}

/**
 * Simulates an API call to fetch all saved articles for the current user.
 * @returns {Promise} - Resolves with an array of saved article objects.
 */
export function getSavedArticles() {
  return new Promise((resolve) => {
    // Returns an empty array to represent a new user state. 
    // Change to mock data if you want to demonstrate the Saved News UI.
    resolve([]); 
  });
}