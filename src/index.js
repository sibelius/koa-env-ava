import 'babel-polyfill';
import server from './app';
import { SERVER_PORT } from './config';

(async() => {
  await server.listen(SERVER_PORT);
  console.log(`Server started on port ${SERVER_PORT}`);
})();
