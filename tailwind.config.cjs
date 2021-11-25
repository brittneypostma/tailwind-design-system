import { carbon } from './carbon-theme.js';

const config = {
	mode: 'jit',
	presets: [carbon],
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: []
};

module.exports = config;
