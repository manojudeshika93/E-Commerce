module.exports = {
    preset: 'jest-expo',
    moduleNameMapper: {
      "\\.svg": "<rootDir>/__mocks__/svgMock.js"
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transformIgnorePatterns: [
      'node_modules/(?!(expo|@react-native|@react-navigation|@react-native-community|@react-native-community/checkbox|@testing-library/react-native)/)',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/.expo/'],
  };
  