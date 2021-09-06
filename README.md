# Gatsby.js + Emotion sample

# Start up
## 0.create environment
```shell
npx gatsby {project-name}
```

## 1.adapt Emotion
Install packages
```shell
yarn add gatsby-plugin-emotion @emotion/react
```

Add the plugin to your gatsby-config.js.
```javascript
module.exports = {
  // ...
  plugins: [
    // ...
    `gatsby-plugin-emotion`,
  ]
}
```

## 2.styling
### Pages
#### Page Component File
[./src/pages/index.js](./src/pages/index.js)
#### Page Styles File
[./src/styles/pages/index.styles.js](./src/styles/pages/index.styles.js)
### Components
#### Component File
[./src/components/layout.js](./src/components/layout.js)
#### Styles File
[./src/styles/components/layout.styles.js](./src/styles/components/layout.styles.js)

### Global styles
[./src/styles/global.css](./src/styles/global.css)