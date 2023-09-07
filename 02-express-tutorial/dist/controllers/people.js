"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { people } = require("../data");
const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};
const createPerson = (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(201).json({ success: true, person: name });
    }
    else {
        res.status(400).json({
            success: false,
            message: "Please enter your name",
        });
    }
};
const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    console.log(name);
    const person = people.find((person) => person.id === +id);
    if (person) {
        person.name = name;
        res.status(200).json({ success: true, person: people });
    }
    else {
        res
            .status(404)
            .json({ success: false, message: `Person not found with id ${id}` });
    }
};
const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === +id);
    if (!person) {
        return res
            .status(404)
            .json({ success: false, message: `Person not found with id ${id}` });
    }
    else {
        people = people.filter((person) => person.id !== +id);
        res.status(200).json({ success: true, data: people });
    }
};
module.exports = { getPeople, createPerson, updatePerson, deletePerson };
