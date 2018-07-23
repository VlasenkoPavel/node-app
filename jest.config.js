module.exports = {
    globals: {
        'ts-jest': {
            'skipBabel': true,
            'useBabelrc': true,
            'enableTsDiagnostics': true
        }
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    moduleNameMapper: {
        '^@application/(.*)$': '<rootDir>/src/server/application/$1',
        '^@infrastructure/(.*)$': '<rootDir>/src/server/infrastructure/$1',
        '^@core/(.*)$': '<rootDir>/src/application/core/$1',
        '^@components/(.*)$': '<rootDir>/src/server/application/components/$1'
   },
    moduleFileExtensions: [
        // 'ts',
        'js'
    ]
 }
