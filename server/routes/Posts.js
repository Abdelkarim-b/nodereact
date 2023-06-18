const express = require("express");
const router = express.Router();
const { Posts } = require("../models")

router.get("/", async (req, res) =>
{
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.post("/", async(req, res) =>
{
    const post = req.body;   //il faut utiliser -> app.use(express.json()); [voir dans index.js]
    console.log("---req.body---", post);
    await Posts.create(post);
    res.json(post); 
})

module.exports = router
  