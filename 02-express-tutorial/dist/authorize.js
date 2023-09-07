"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "karan") {
        req.user = {
            name: "karan",
            id: 7,
        };
    }
    else {
        res.status(401).send("Unauthorized");
    }
    next();
};
module.exports = authorize;
