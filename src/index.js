import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import 'dotenv/config';

(async () => {
  await initMongoConnection();
  setupServer();
})();