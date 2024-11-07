const express = require('express');
const cors = require('cors');
const { dbconnect } = require('./config/database');

const app = express();
const corsOptions = {
    origin: ['http://your-frontend-domain.com', 'http://localhost:3000'], // Add your frontend URLs here
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
  app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 5000;
dbconnect();

const userRoutes = require('./routes/user'); 
const newsletterRoutes = require('./routes/NewsLetter'); // Use lowercase to stay consistent
const agentRoutes = require('./routes/agent'); // Import the agent route
const EduFairRoutes = require('./routes/EduFair');
app.use('/api/v1', userRoutes);
app.use('/api/v1', newsletterRoutes); // Consistently named route import
app.use('/api/v1', agentRoutes); 
app.use('/api/v1', EduFairRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Edufair API, Hi1');
}
);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
