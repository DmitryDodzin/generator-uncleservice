
import gconf from 'gconf/default';
import logger from 'morgan';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import errorhandler from 'errorhandler';

import sample from './routes/sample';

const app = express();

app.use(helmet());
app.use(logger(gconf.get('logger')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hey You created a server, go to /api/foo to see sample route'));

app.use('/api', sample);

app.use(errorhandler());

export default app;
