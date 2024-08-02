import { Router } from 'express';
import { createProduct } from './handlers/product';

export const router: Router = Router();

// Routing;
router.get('/', (req, res) => {
	res.json('Desde el metodo get');
});

router.post('/', createProduct);

router.put('/', (req, res) => {
	res.json('Desde el metodo put');
});

router.patch('/', (req, res) => {
	res.json('Desde el metodo patch');
});

router.delete('/', (req, res) => {
	res.json('Desde el metodo delete');
});
