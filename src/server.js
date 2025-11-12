import express from 'express';
import cors from 'cors';
import pino from 'pino';
import pinoHttp from 'pino-http';
import rootRouter from './routers/index.js';

const logger = pino();
const pinoMiddleware = pinoHttp({ logger });

const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: 'Not found',
  });
};

export const setupServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(pinoMiddleware);

  app.use(rootRouter); 

  app.use(notFoundHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};