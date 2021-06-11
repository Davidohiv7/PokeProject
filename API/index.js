const server = require('./src/app.js');
const { conn } = require('./src/db/db');


conn.sync({ force: true })
.then(() => {
  server.listen(3001, () => {
    console.log('API connection established in port 3001'); // eslint-disable-line no-console
  })
});
