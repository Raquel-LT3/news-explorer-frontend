// src/utils/NewsApi.js

/**
 * API configuration and endpoints.
 * Uses the proxy URL for production and NewsAPI for development.
 */
const BASE_URL = process.env.NODE_ENV === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const API_KEY = "9501980ed83346b19ed3139af794aa53";

/**
 * Fetches articles from the News API based on a keyword search.
 * @param {string} keyword - The search term entered by the user.
 * @returns {Promise} - Resolves with the news data or rejects with an error status.
 */
export const getNews = (keyword) => {
  // Calculate date range (current date and 7 days prior)
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  const to = today.toISOString();
  const from = lastWeek.toISOString();

  return fetch(
    `${BASE_URL}?q=${keyword}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};