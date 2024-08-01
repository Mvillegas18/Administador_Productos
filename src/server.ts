import colors from 'colors';
import express, { Express } from 'express';
import { db } from './config/db';
import { router } from './router';

// Conect db
async function connectDB() {
	try {
		await db.authenticate();
		db.sync();
		console.log(colors.green('Coneccion exitosa a la base de datos'));
	} catch (e) {
		console.log(e);
		console.error(colors.red('Hubo un error al conectar a la base de datos'));
	}
}
connectDB();
export const server: Express = express();
server.use('/api/products', router);
