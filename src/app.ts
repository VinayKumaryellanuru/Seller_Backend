import express from 'express';
import cors from 'cors';
import dbInit from './db/init';
import bodyParser from 'body-parser';
import Routers from './routes/index'

const app = express();
const port=3002;  

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/',Routers );

dbInit();
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
