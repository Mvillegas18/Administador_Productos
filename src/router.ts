import { Router } from 'express';

export const router: Router = Router();

// Routing;
router.get('/', (req, res) => {
	res.json('Desde el metodo get');
});

router.post('/', (req, res) => {
	res.json('Desde el metodo post');
});

router.put('/', (req, res) => {
	res.json('Desde el metodo put');
});

router.patch('/', (req, res) => {
	res.json('Desde el metodo patch');
});

router.delete('/', (req, res) => {
	res.json('Desde el metodo delete');
});
