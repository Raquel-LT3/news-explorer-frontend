// src/utils/NewsApi.js

// Requirement: Use proxy URL in production, NewsAPI in development
const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const apiKey = "9501980ed83346b19ed3139af794aa53";

export const getNews = (keyword) => {
  // Requirement: Logic for current date and 7 days ago
  const today = new Date();
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  const to = today.toISOString();
  const from = lastWeek.toISOString();

  return fetch(
    `${baseUrl}?q=${keyword}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=100`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};