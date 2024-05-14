const express = require('express');
const cors = require('cors');

const app = express();

// Mengizinkan semua asal (perhatikan bahwa dalam produksi, ini mungkin tidak aman)
app.use(cors());

// Middleware dan rute lainnya...

app.listen(8000, () => {
  console.log('Server berjalan di port 8000');
});
