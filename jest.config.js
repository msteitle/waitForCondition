module.exports = {
    moduleDirectories: ['node_modules'],
    testRegex: '\.spec\\.js$',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    coverageDirectory: 'reports/coverage',
    coverageReporters: ['text-summary', 'html'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    clearMocks: true // clear mocks between tests
};
