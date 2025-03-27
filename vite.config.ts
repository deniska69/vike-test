import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [vike({}), react({}), tailwindcss(), tsconfigPaths()],
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
	build: {
		target: 'es2022',
	},
});
