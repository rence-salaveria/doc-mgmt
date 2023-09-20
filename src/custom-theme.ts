import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base':
			"Manrope, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		'--theme-font-family-heading':
			"Public Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #434242
		'--color-primary-50': '227 227 227', // #e3e3e3
		'--color-primary-100': '217 217 217', // #d9d9d9
		'--color-primary-200': '208 208 208', // #d0d0d0
		'--color-primary-300': '180 179 179', // #b4b3b3
		'--color-primary-400': '123 123 123', // #7b7b7b
		'--color-primary-500': '67 66 66', // #434242
		'--color-primary-600': '60 59 59', // #3c3b3b
		'--color-primary-700': '50 50 50', // #323232
		'--color-primary-800': '40 40 40', // #282828
		'--color-primary-900': '33 32 32', // #212020
		// secondary | #11081b
		'--color-secondary-50': '219 218 221', // #dbdadd
		'--color-secondary-100': '207 206 209', // #cfced1
		'--color-secondary-200': '196 193 198', // #c4c1c6
		'--color-secondary-300': '160 156 164', // #a09ca4
		'--color-secondary-400': '88 82 95', // #58525f
		'--color-secondary-500': '17 8 27', // #11081b
		'--color-secondary-600': '15 7 24', // #0f0718
		'--color-secondary-700': '13 6 20', // #0d0614
		'--color-secondary-800': '10 5 16', // #0a0510
		'--color-secondary-900': '8 4 13', // #08040d
		// tertiary | #73788c
		'--color-tertiary-50': '234 235 238', // #eaebee
		'--color-tertiary-100': '227 228 232', // #e3e4e8
		'--color-tertiary-200': '220 221 226', // #dcdde2
		'--color-tertiary-300': '199 201 209', // #c7c9d1
		'--color-tertiary-400': '157 161 175', // #9da1af
		'--color-tertiary-500': '115 120 140', // #73788c
		'--color-tertiary-600': '104 108 126', // #686c7e
		'--color-tertiary-700': '86 90 105', // #565a69
		'--color-tertiary-800': '69 72 84', // #454854
		'--color-tertiary-900': '56 59 69', // #383b45
		// success | #35cabb
		'--color-success-50': '225 247 245', // #e1f7f5
		'--color-success-100': '215 244 241', // #d7f4f1
		'--color-success-200': '205 242 238', // #cdf2ee
		'--color-success-300': '174 234 228', // #aeeae4
		'--color-success-400': '114 218 207', // #72dacf
		'--color-success-500': '53 202 187', // #35cabb
		'--color-success-600': '48 182 168', // #30b6a8
		'--color-success-700': '40 152 140', // #28988c
		'--color-success-800': '32 121 112', // #207970
		'--color-success-900': '26 99 92', // #1a635c
		// warning | #ffbf00
		'--color-warning-50': '255 245 217', // #fff5d9
		'--color-warning-100': '255 242 204', // #fff2cc
		'--color-warning-200': '255 239 191', // #ffefbf
		'--color-warning-300': '255 229 153', // #ffe599
		'--color-warning-400': '255 210 77', // #ffd24d
		'--color-warning-500': '255 191 0', // #ffbf00
		'--color-warning-600': '230 172 0', // #e6ac00
		'--color-warning-700': '191 143 0', // #bf8f00
		'--color-warning-800': '153 115 0', // #997300
		'--color-warning-900': '125 94 0', // #7d5e00
		// error | #d20000
		'--color-error-50': '248 217 217', // #f8d9d9
		'--color-error-100': '246 204 204', // #f6cccc
		'--color-error-200': '244 191 191', // #f4bfbf
		'--color-error-300': '237 153 153', // #ed9999
		'--color-error-400': '224 77 77', // #e04d4d
		'--color-error-500': '210 0 0', // #d20000
		'--color-error-600': '189 0 0', // #bd0000
		'--color-error-700': '158 0 0', // #9e0000
		'--color-error-800': '126 0 0', // #7e0000
		'--color-error-900': '103 0 0', // #670000
		// surface | #0d0f1c
		'--color-surface-50': '219 219 221', // #dbdbdd
		'--color-surface-100': '207 207 210', // #cfcfd2
		'--color-surface-200': '195 195 198', // #c3c3c6
		'--color-surface-300': '158 159 164', // #9e9fa4
		'--color-surface-400': '86 87 96', // #565760
		'--color-surface-500': '13 15 28', // #0d0f1c
		'--color-surface-600': '12 14 25', // #0c0e19
		'--color-surface-700': '10 11 21', // #0a0b15
		'--color-surface-800': '8 9 17', // #080911
		'--color-surface-900': '6 7 14' // #06070e
	}
};
