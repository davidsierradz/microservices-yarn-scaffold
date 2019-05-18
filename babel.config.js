'use strict'

export default {
  overrides: [
    {
      test: './packages/service-a',
      extends: './packages/service-a/babel.config.js',
    },
    {
      test: './packages/service-b',
      extends: './packages/service-b/babel.config.js',
    },
  ],
}
