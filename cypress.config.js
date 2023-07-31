const { defineConfig } = require('cypress');
const webpackConfig = require('./webpack.production');

module.exports = defineConfig({
  video: false,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    specPattern: 'src/__tests__/component/*.test.{ts,tsx}',
    indexHtmlFile: 'src/__tests__/__mocks__/component-index.html',
    supportFile: 'src/__tests__/__mocks__/component.ts',
    downloadsFolder: 'src/__tests__/__snapshots__/downloads',
    screenshotsFolder: 'src/__tests__/__snapshots__/screenshots',
    videosFolder: 'src/__tests__/__snapshots__/videos',
    fixturesFolder: 'src/__tests__/__data__',
  },
  e2e: {
    specPattern: 'src/__tests__/e2e/**/*.test.{ts,tsx}',
    supportFile: 'src/__tests__/__mocks__/e2e.ts',
    baseUrl: 'http://localhost:9000',
    downloadsFolder: 'src/__tests__/__snapshots__/downloads',
    screenshotsFolder: 'src/__tests__/__snapshots__/screenshots',
    videosFolder: 'src/__tests__/__snapshots__/videos',
  },
});
