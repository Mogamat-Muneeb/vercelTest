const express = require('express')
const cors = require('cors');

const app = express()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({msg: "Awe ma se kin!!"})
})

const port = process.env. PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));