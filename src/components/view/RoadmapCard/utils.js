export const removeSpecialCharacters = (str) => {
  return str.replace(/[^\w\s]/gi, " ");
};
