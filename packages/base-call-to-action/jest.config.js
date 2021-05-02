const { generatePackageJestConfig } = require('../../config/jest/jest.utils');
const packageName = require('./package.json').name.split('@rupertong/').pop();

module.exports = generatePackageJestConfig(packageName);
