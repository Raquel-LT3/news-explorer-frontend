// src/utils/api.js

/**
 * Simulates an API call to save an article to the database.
 * Generates a stable unique ID based on the current timestamp.
 * * @param {Object} article - The article data received from NewsAPI.
 * @returns {Promise<Object>} - Resolves with the article and a unique _id.
 */

export function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      ...article,
      // Use the article's URL or title as the ID. 
      // This is "pure" because it doesn't rely on a clock or randomizer.
      _id: article.url || article.title, 
    });
  });
}

/**
 * Simulates an API call to remove an article from the database.
 * * @param {string} id - The unique ID of the article to be deleted.
 * @returns {Promise<Object>} - Resolves with a success message and the deleted ID.
 */
export function deleteArticle(id) {
  return new Promise((resolve) => {
    resolve({ message: "Article successfully deleted", _id: id });
  });
}

/**
 * Simulates an API call to fetch all saved articles for the current user.
 * Currently returns an empty array to represent a new user state.
 * * @returns {Promise<Array>} - Resolves with an array of saved article objects.
 */
export function getSavedArticles() {
  return new Promise((resolve) => {
    resolve([]); 
  });
}