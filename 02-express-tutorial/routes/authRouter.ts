const express = require("express");
import { Request, Response } from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).json({
      success: true,
      Person: `Welcome ${name}`,
    });
  }
  res.status(401).send("Please enter your name");
});

module.exports = router;
