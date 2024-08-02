import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
dotenv.config();

// eslint-disable-next-line no-undef
export const db = new Sequelize(process.env.DB_CONNECTION, {
	models: [__dirname + '/../models/**/*.ts'],
});
