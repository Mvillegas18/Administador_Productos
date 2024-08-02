import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import Product from '../models/Product.model';

export const createProduct = async (req: Request, res: Response) => {
	// Validacion
	await check('name')
		.notEmpty()
		.withMessage('El nombre del producto no puede ir vacio')
		.run(req);
	await check('price')
		.isNumeric()
		.withMessage('Valor no valido')
		.notEmpty()
		.withMessage('El nombre del producto no puede ir vacio')
		.custom((value) => value > 0)
		.withMessage('Precio no valido')
		.run(req);

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const product = await Product.create(req.body);
	res.json({ data: product });
};