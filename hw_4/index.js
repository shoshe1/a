const express = require("express");


const app = express();
app.get("/hello" , (req , res) =>
    {
res.send("hell");
    }
);
app.get("/hi" , (req , res) =>
    {
res.send("u visited hi");
    }
);
app.get("/test" , (req , res) =>
    {
res.send("test");
    }
);

app.post("/addcomment", (req , res)=>{
    res.send("post request or addd comment");
});
app.listen(3000 , ()=>
{console.log("i am lisitining in port 3000");});