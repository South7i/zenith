module.exports = {
  '*.{js,jsx,ts,tsx,html}': ['eslint --fix'],
  '*.{html,css,scss,sass,less}': ['stylelint --fix'],
  "*.{json}": ["prettier --write"]
};