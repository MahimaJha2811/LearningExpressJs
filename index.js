const express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("hello Express js world");
});
console.log("heyyyy");

app.listen(3000);
