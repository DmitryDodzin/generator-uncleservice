
import gconf from 'gconf/default';
import logger from 'morgan';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import errorhandler from 'errorhandler';

export default app = express();

app.use(helmet());
app.use(logger(gconf.get('logger.format')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/config', (req, res) => res.send(gconf.get()));

app.use(errorhandler());
