module.exports = {
  roots: ['<rootDir>/__test__/', '<rootDir>/src/'], // 测试的目录
  modulePaths: ['<rootDir>'],
  coveragePathIgnorePatterns: ['/node_modules/'], // 忽略统计覆盖率的文件
  transform: {
    '^.+\\.js$': 'babel-jest',
    // '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(lodash-es|other-es-lib))'], //
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '.*\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  }, // 代表需要被Mock的资源名称
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], //支持文件名
};
