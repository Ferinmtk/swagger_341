require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const swaggerDocs = require('./swagger');
const usersRoute = require('./routes/users');





const itemsRoutes = require('./routes/items');

app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRoutes);
app.use('/api/users', usersRoute);
swaggerDocs(app); 

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Mongo connection error:', err));
