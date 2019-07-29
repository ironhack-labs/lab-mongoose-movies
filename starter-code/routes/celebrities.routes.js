const express = require("express");
const router = express.Router;

const Celebrity = require("../models/Celebrity.model");
router.get("/create", (req, res, next) => res.render("celebrity-add"));

const { name, occupation, catchPhrase } = req.body;

Celebrity.create;
