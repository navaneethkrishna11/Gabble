const express = require("express");
const cors = require("cors");
const axios=require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.use(cors()); 
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username:username,secret:username,first_name:username},
        {headers:{"private-key" :"550467c6-f412-4b8c-be8c-f44ddeb1a59b" }}

)
    return res.status(r.status).json(r.data);
  }catch(e){
    return res.status(500).json({ message: 'An unknown error occurred', error: e.message });
}

});

app.listen(3001);