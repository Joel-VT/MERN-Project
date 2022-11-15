const express = require('express');
const app = express();
const cors = require('cors');

const {pirateRouter} = require("./routes/pirate.route");

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/api/pirates", pirateRouter);

app.listen(8002, () => console.log("The server is all fired up on port 8002"));