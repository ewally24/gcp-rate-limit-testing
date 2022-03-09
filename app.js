const express = require('express');

const app = express();

const PORT = process.env.PORT  || 2400;

const swarmRoutes = require('./routes/api/swarm.routes')

// Define Routes
app.use('/api/swarm', swarmRoutes);

app.listen(PORT, () => {
  console.log('Server listening on PORT: ', PORT)
})
