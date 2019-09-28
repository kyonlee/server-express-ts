import express from 'express';
import bodyPaser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/LoginController';

const app = express();

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['hfiuewhqf'] }));
app.use(AppRouter.getInstance());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
