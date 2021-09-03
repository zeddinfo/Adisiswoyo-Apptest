// jest.config.js
const { defaults } = require('jest-config');
module.exports = {
    // ...
    preset: 'react-native',
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    ],
    // ...
};