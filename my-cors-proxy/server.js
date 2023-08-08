const express = require('express');
const cors = require('cors');
const app = express();
const searchRoutes = require('./searchRoutes');

app.use(express.json());
app.use(cors());
// Other routes and middleware can be added here...

// Include the searchRoutes
app.use('/api', searchRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});