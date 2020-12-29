const path = require('path');

const root = path.join(__dirname, '..', 'src');
const docPattern = '*.stories.mdx';
const storyPattern = '*.stories.js';
const storybook = 'storybook/**';

module.exports = {
  "stories": [
    path.join(root, storybook, docPattern),
    path.join(root, storybook,storyPattern),
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}
