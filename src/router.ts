import { Router } from 'express';
import { body, param } from 'express-validator';
import {
	createProduct,
	getProductById,
	getProducts,
	updateProduct,
} from './handlers/product';
import { handleInputErrors } from './middleware';

export const router: Router = Router();

// Routing;
router.get('/', getProducts);
router.get(
	'/:id',
	param('id').isInt().withMessage('El id debe ser numerico'),
	handleInputErrors,
	getProductById
);

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

router.put(
	'/:id',
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
	body('availability')
		.isBoolean()
		.withMessage('Valor para la disponibilidad no valido'),
	handleInputErrors,
	updateProduct
);

router.patch('/', (req, res) => {
	res.json('Desde el metodo patch');
});

router.delete('/', (req, res) => {
	res.json('Desde el metodo delete');
});
