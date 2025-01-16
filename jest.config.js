/** @type {import('jest').Config} */
const config = { testEnvironment: "jsdom",
moduleNameMapper: {
  "^.+.(svg)$": "jest-transform-stub",
},
transform: {
"^.+\\.tsx?$": "babel-jest"
}};

export default config;