const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt")

router.post("/", async (req, res) =>
{
    const user = req.body;   //il faut utiliser -> app.use(express.json()); [voir dans index.js]
    bcrypt
    .hash(user.password, 10)
    .then((hash)=>{
        user.password = hash;
        Users.create(user);
        res.json(user);
    })
})

module.exports = router
  