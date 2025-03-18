const express = require('express');
const cors = require('cors');
const { dbconnect } = require('./config/database');

const app = express();

// ✅ Allow specific frontend origin for production
app.use(
  cors({
    origin: ['https://abroadeducares.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

// ✅ Handle preflight requests globally
app.options('*', cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;
dbconnect();

const allroutes = require('./routes/allroutes');
app.use('/api/v1', allroutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Abroad Educare API');
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
