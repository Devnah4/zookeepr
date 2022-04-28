const express = require("express");
const PORT = process.env.PORT || 441;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const fs = require("fs");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Adds the port
app.listen(PORT, () => {
  console.log(`API server now on port: ${PORT}!`);
});
