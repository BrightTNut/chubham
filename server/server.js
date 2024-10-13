const express = require("express");
require("dotenv").config();
const app = express();
const dbConfig = require("./dbConfig/dbConfig")


const portfoilioRoute = require("./routes/portfolioRotes");

app.use(express.json());

app.use("https://chubham.vercel.app", portfoilioRoute);


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
