const express = require('express');
const cors = require('cors');
const { dbconnect } = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
dbconnect();

const allroutes = require('./routes/allroutes');
app.use('/api/v1',allroutes);


app.get('/', (req, res) => {
    res.send('Welcome to the Abroad educares API, Hi1');
}
);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
