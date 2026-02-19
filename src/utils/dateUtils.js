// src/utils/dateUtils.js

export const formatDate = (isoString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(isoString).toLocaleDateString('en-US', options);
};