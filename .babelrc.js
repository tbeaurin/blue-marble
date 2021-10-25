module.exports = {
    presets: [
      [
        "@babel/env",
        {
          modules: false,
          targets: {
            browsers: [
              "last 2 versions",
              "safari >= 7"
            ]
          }
        }
      ],
      "@babel/react"
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/syntax-dynamic-import",
      "@babel/transform-runtime",
      "@babel/plugin-proposal-nullish-coalescing-operator"
    ]
  }
  