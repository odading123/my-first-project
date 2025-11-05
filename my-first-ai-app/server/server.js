require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', aiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
