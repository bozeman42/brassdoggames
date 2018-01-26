let express = require('express');
let app = express();
const PORT = 6565;


app.use(express.static('server/public'));

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));