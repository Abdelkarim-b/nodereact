const express = require('express');
const app = express();
app.use(express.json());
const db = require('./models');

//Routers  
const postsRouter = require('./routes/Posts');
app.use("/posts", postsRouter);

db.sequelize.sync().then(() =>
{ 
    app.listen(3001, () =>
    {
        console.log("Server running on port 3001");
    })
    
}).catch((error) =>
{
    console.error('Error syncing database:', error);
});

