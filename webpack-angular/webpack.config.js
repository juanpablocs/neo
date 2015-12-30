module.exports = {
  context: __dirname + "/app/src",
  entry: "./app.js",
  output:{
    path: __dirname + "/app/dist",
    filename: "bundle.js"
  }
};
