import { Request, Response } from 'express';
import Product from '../models/Product.model';

export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.findAll();
		res.json({ data: products });
	} catch (error) {
		console.log(error);
	}
};

export const getProductById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const product = await Product.findByPk(id);

		if (!product) {
			return res.status(400).json({
				error: 'Producto no encontrado',
			});
		}

		res.json({ data: product });
	} catch (error) {
		console.log(error);
	}
};

export const createProduct = async (req: Request, res: Response) => {
	const product = await Product.create(req.body);
	res.json({ data: product });
};

export const updateProduct = async (req: Request, res: Response) => {
	const { id } = req.params;

	const product = await Product.findByPk(id);
	if (!product) {
		return res.status(404).json({ error: 'El producto no existe' });
	}

	await product.update(req.body);
	await product.save();
	res.json({ data: product });
};
