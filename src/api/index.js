// [START import]
const express = require('express');
const app = express();
// [END import]

// [START middleware]
const port = 3001;
const cors = require('cors')({ origin: true });
app.use(cors);
// [END middleware]

const resultsData = JSON.parse(
  JSON.stringify(require('./getResults/getResults.json')),
);

/**
 * get Results of table
 */
app.post('/api/v1/getResults', (req, res) => {
  // Return success response
  return res.status(200).json(resultsData);
});
/* [END `/say/hello` ] - must be added before `exports.api = ...` */

app.listen(port, () => console.log(`Test API listening on port ${port}!`));
