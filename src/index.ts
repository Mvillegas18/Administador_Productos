import colors from 'colors';
import { server } from './server';

// eslint-disable-next-line no-undef
const port = process.env.PORT ?? 4000;
server.listen(port, () => {
	console.log(
		colors.yellow.bold(`Server is running on http://localhost:${port}`)
	);
});
