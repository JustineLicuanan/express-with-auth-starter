import { Express } from 'express';

import { authRoute } from './authRoute';

export const useRoutes = (app: Express) => {
	app.use('/auth', authRoute);
};
