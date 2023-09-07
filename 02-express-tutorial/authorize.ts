import { NextFunction, Request, Response } from "express";
const authorize = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.query;
  if (user === "karan") {
    req.user = {
      name: "karan",
      id: 7,
    };
  } else {
    res.status(401).send("Unauthorized");
  }

  next();
};

module.exports = authorize;
