module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/config/jest/__mocks__/fileMock.ts',
    '@rupertong/(.+)': '<rootDir>/packages/$1/lib',
  },
};
