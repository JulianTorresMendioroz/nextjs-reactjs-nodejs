const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({message: "All ok!"})
});
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});