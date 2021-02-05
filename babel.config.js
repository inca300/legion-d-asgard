module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: { version: "3.8", proposals: true },
        targets: "> 0.10%,  not dead",
      },
    ],
  ],
};
