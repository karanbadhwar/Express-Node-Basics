"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
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
