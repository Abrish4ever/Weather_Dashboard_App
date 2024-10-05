module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest', // Transforms JS/JSX files using Babel
    },
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js', // Correct regex for image assets
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock style imports
      '^react-icons/fa6$': 'react-icons/fa', // Maps react-icons/fa6 to react-icons/fa
    },
    transformIgnorePatterns: [
      'node_modules/(?!(react-icons)/)', // Ensures react-icons is transformed correctly
    ],
  };
  
  

// const jestConfig = {
//     testEnvironment: "jsdom",
// };
  
//   export default jestConfig;