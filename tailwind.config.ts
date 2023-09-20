/** @type {import('tailwindcss').Config}*/

import { join } from 'path';
import type {Config} from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './src/custom-theme';
import forms from '@tailwindcss/forms';

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(
			require.resolve('@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				public: ['Public Sans', 'sans-serif'],
				manrope: ['Manrope', 'sans-serif']
			}
		}
	},

	plugins: [
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		}),
		forms
	]
} satisfies Config;

export default config;
