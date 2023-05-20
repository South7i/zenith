module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    // add any additional rules or overrides here
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true
  },
};