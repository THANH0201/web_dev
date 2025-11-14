// app.js
const express = require("express");
const app = express();

const morgan = require('morgan');
app.use(morgan('tiny'));
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

app.use(express.json());

app.use("/api/tours", tourRouter);
app.use("/api/users", userRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
