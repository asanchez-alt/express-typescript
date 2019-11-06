import 'dotenv/config';
import App from './app';
import configEnv from 'config/config';

configEnv();

const app = new App();
app.initializeModules([]);
app.listen();
