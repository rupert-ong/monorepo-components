const baseConfig = require('./config/jest/jest.config.base');

module.exports = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*'],
  testPathIgnorePatterns: ['<rootDir>/packages/base-builder'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/lib/**/*.{ts,tsx,js,jsx}',
    '!**/*.stor(y|ies).*',
  ],
  coverageDirectory: '<rootDir>/coverage/',
};
