const express = require('express');
const cors = require('cors');
const { dbconnect } = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
dbconnect();

// const userRoutes = require('./routes/user'); 
// const newsletterRoutes = require('./routes/NewsLetter'); // Use lowercase to stay consistent
// const agentRoutes = require('./routes/agent'); // Import the agent route
// const EduFairRoutes = require('./routes/EduFair');
const allroutes = require('./routes/allroutes');
app.use('/api/v1',allroutes);
// app.use('/api/v1', userRoutes);
// app.use('/api/v1', newsletterRoutes); // Consistently named route import
// app.use('/api/v1', agentRoutes); 
// app.use('/api/v1', EduFairRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Abroad educares API, Hi1');
}
);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
