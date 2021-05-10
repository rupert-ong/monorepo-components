const {
  generatePackageJestConfig,
} = require('../../src/config/jest/jest.utils');
const packageName = require('./package.json').name.split('/').pop();

module.exports = generatePackageJestConfig(packageName);
