import express from 'express';
import bodyPaser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';
import './controllers/LoginController';
import { router as controllerRouter } from './controllers/decorators/controller';

const app = express();

app.use(bodyPaser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['hfiuewhqf'] }));
app.use(router);
app.use(controllerRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
