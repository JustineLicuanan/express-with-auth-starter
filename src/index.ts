import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';

import { PORT } from './constants';
import { getConnectionConfig } from './ormconfig';
import { useMiddlewares } from './middlewares';
import { useRoutes } from './routes';

(async () => {
	const app = express();
	const connectionConfig = getConnectionConfig();
	await createConnection({ ...connectionConfig!, name: 'default' });

	useMiddlewares(app);
	useRoutes(app);

	app.listen({ port: PORT }, () => {
		console.log(`🚀 Server ready at http://localhost:${PORT}`);
	});
})();
