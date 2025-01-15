import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/server.route.js';

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
// Increasing the image size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

// API routes
app.use('/api', router);

// Listening to server
app.listen(PORT || 3001, () => {
  console.log(`Listening on port ${PORT}`);
});
