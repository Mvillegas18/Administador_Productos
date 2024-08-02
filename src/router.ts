import { Router } from 'express';
import { body } from 'express-validator';
import { createProduct } from './handlers/product';
import { handleInputErrors } from './middleware';

export const router: Router = Router();

// Routing;
router.get('/', (req, res) => {
	res.json('Desde el metodo get');
});

router.post(
	'/',
	body('name')
		.notEmpty()
		.withMessage('El nombre del producto no puede ir vacio'),

	body('price')
		.isNumeric()
		.withMessage('Valor no valido')
		.notEmpty()
		.withMessage('El precio del producto no puede ir vacio')
		.custom((value) => value > 0)
		.withMessage('Precio no valido'),
	handleInputErrors,
	createProduct
);

router.put('/', (req, res) => {
	res.json('Desde el metodo put');
});

router.patch('/', (req, res) => {
	res.json('Desde el metodo patch');
});

router.delete('/', (req, res) => {
	res.json('Desde el metodo delete');
});
