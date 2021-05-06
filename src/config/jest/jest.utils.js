const baseConfig = require('./jest.config.base');

const generatePackageJestConfig = (packageName) => ({
  ...baseConfig,
  roots: [`<rootDir>/packages/${packageName}`],
  collectCoverageFrom: [
    `<rootDir>/packages/${packageName}/lib/**/*.{ts,tsx,js,jsx}`,
  ],
  coverageDirectory: `<rootDir>/packages/${packageName}/coverage/`,
  moduleDirectories: ['node_modules'],
  modulePaths: [`<rootDir>/packages/${packageName}/lib/`],
  name: packageName,
  displayName: packageName,
  rootDir: '../..',
});

module.exports = {
  generatePackageJestConfig,
};
