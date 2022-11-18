// Import images helper
const images = require.context("../assets", true);
export const imagePath = (name) => images(name, true).default;