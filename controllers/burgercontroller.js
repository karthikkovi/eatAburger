import express from "express";
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
    burger.sellectAll()
        .then(burgers => {
            res.render("index", { burgers });
        });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name).then(result => {
        res.json({ id: result.insertId });
    })
});

router.put("/api/burgers/:id", function (req, res) {
    let data = { devoured: req.body.devoured === 'true' }
    let condition = { id: req.params.id };

    burger.updateOne(data, condition)
        .then(result => {
            if (result.changedRows == 0) {
                res.status(404).end();
            } else {
                res.status(202).end();
            }
        });
});