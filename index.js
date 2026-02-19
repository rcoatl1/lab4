
const express = require('express');
const app = express();

app.use(express.static('public'));


let hits = {
  index: 0,
  page1: 0,
  page2: 0
};


app.get('/hits/:page', (req, res) => {
  const page = req.params.page;

  if (hits[page] !== undefined) {
    hits[page]++;
    res.json({ hits: hits[page] });
   } else {
    res.status(404).send('Invalid URL');
  }
});


app.listen(3000, () => {
  console.log('Listening at http://localhost:3000/');
});
