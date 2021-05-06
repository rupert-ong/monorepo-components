const baseConfig = require('./src/config/jest/jest.config.base');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.js'],
  testPathIgnorePatterns: ['<rootDir>/packages/base-builder'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/lib/**/*.{ts,tsx,js,jsx}',
    '!**/*.stor(y|ies).*',
  ],
  coverageDirectory: '<rootDir>/coverage/',
};
