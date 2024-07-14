const express = require("express");
const app = express();
const path = require("path");
const apikey = "62fb5c46";
app.use(express.json());
const axios = require("axios");

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/search", async (req, res) => {
    const name = req.query.name;
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: apikey,
            s: name,
        },
    });
    return res.status(200).json(response.data);
})


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


