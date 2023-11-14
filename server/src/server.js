import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.get("/api", (req, res) => {
  res.send({ api: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
