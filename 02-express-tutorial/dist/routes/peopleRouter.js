"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const { getPeople, updatePerson, createPerson, deletePerson, } = require("../controllers/people");
//OPTION 1
// router.get("/", getPeople);
// router.post("/postman", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);
//OPTION 2
router.route("/").get(getPeople);
router.route("/postman").post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);
module.exports = router;
