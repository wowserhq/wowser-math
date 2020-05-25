module.exports = {
  collectCoverageFrom: ['src/lib/**/*.{js,mjs}'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  moduleFileExtensions: ['js', 'mjs'],
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
};
