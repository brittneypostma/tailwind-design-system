const carbon = require('./carbon-theme.cjs');

const config = {
	mode: 'jit',
	presets: [carbon],
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: []
};

module.exports = config;
