const express = require("express");
const dbo = require("../db/conn");

const recordRoutes = express.Router();
const ObjectId = require("mongodb").ObjectId;
const authDoc = dbo.getDb("admin").collection("auth");

// login
recordRoutes.route("/admin/login:email").get(function (req, res) {
    let myquery = { email: ObjectId(req.params.email) };
    authDoc
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            else {
                localStorage.setItem('email','$req.params.email');
                localStorage.setItem('password','$req.params.password');
            }
            res.json(result);
        });
});

// signup
recordRoutes.route("/admin/signup").post(function (req, response) {
    let myobj = {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
    };
    authDoc
        .insertOne(myobj, function (err, res) {
            if (err) throw err;
            response.json(res);
    });
});

// update
recordRoutes.route("/record/update/:id").post(function (req, response) {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        },
    }
    authDoc.update(myquery,newvalues,function (err, obj) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(obj);
    });
});

// delete
recordRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = recordRoutes;