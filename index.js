const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bhai ka Blogger Clone API live hai!');
});

app.listen(PORT, () => {
    console.log(`Server chal raha hai port ${PORT} par`);
});
