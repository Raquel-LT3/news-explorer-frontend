// src/utils/dateUtils.js

/**
 * Formats an ISO date string into a human-readable format.
 * Example output: "January 2, 2026"
 * @param {string} isoDate - The ISO date string to be formatted.
 * @returns {string} - The formatted date or an empty string if input is invalid.
 */
export const formatDate = (isoDate) => {
  if (!isoDate) return "";
  
  const date = new Date(isoDate);
  
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};