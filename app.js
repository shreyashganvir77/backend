const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Azure API backend server");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
