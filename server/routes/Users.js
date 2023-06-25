const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { where } = require("sequelize");

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

router.post("/login", async (req, res)=>{
    const {username, password} = req.body;
    const user = await Users.findOne({
        where:{
            username: username
        }
    });
    if(!user) res.json({ error: "user doesn't exist" })
    else {
        bcrypt.compare(password, user.password)
        .then((match)=>{
          if(!match) res.json({ error: "error username and password combination "});
          else res.json("You logged in !");
        })
    }
})

module.exports = router
  