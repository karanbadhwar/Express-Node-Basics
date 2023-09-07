import { Request, Response } from "express";

const express = require("express");
const app = express();

const peopleRouter = require("./routes/peopleRouter");
const authRouter = require("./routes/authRouter");

// Static assets
app.use(express.static("./methods-public"));

//Parse Form Data
app.use(express.urlencoded({ extended: true }));

//Parse JSON data
app.use(express.json());

///api/people
app.use("/api/people", peopleRouter);

app.use("/login", authRouter);

// Server Listening
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
