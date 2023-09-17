import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
    name: 'custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #4971A6 
		"--color-primary-50": "228 234 242", // #e4eaf2
		"--color-primary-100": "219 227 237", // #dbe3ed
		"--color-primary-200": "210 220 233", // #d2dce9
		"--color-primary-300": "182 198 219", // #b6c6db
		"--color-primary-400": "128 156 193", // #809cc1
		"--color-primary-500": "73 113 166", // #4971A6
		"--color-primary-600": "66 102 149", // #426695
		"--color-primary-700": "55 85 125", // #37557d
		"--color-primary-800": "44 68 100", // #2c4464
		"--color-primary-900": "36 55 81", // #243751
		// secondary | #8ABF63 
		"--color-secondary-50": "237 245 232", // #edf5e8
		"--color-secondary-100": "232 242 224", // #e8f2e0
		"--color-secondary-200": "226 239 216", // #e2efd8
		"--color-secondary-300": "208 229 193", // #d0e5c1
		"--color-secondary-400": "173 210 146", // #add292
		"--color-secondary-500": "138 191 99", // #8ABF63
		"--color-secondary-600": "124 172 89", // #7cac59
		"--color-secondary-700": "104 143 74", // #688f4a
		"--color-secondary-800": "83 115 59", // #53733b
		"--color-secondary-900": "68 94 49", // #445e31
		// tertiary | #D9C8B4 
		"--color-tertiary-50": "249 247 244", // #f9f7f4
		"--color-tertiary-100": "247 244 240", // #f7f4f0
		"--color-tertiary-200": "246 241 236", // #f6f1ec
		"--color-tertiary-300": "240 233 225", // #f0e9e1
		"--color-tertiary-400": "228 217 203", // #e4d9cb
		"--color-tertiary-500": "217 200 180", // #D9C8B4
		"--color-tertiary-600": "195 180 162", // #c3b4a2
		"--color-tertiary-700": "163 150 135", // #a39687
		"--color-tertiary-800": "130 120 108", // #82786c
		"--color-tertiary-900": "106 98 88", // #6a6258
		// success | #96D475 
		"--color-success-50": "239 249 234", // #eff9ea
		"--color-success-100": "234 246 227", // #eaf6e3
		"--color-success-200": "229 244 221", // #e5f4dd
		"--color-success-300": "213 238 200", // #d5eec8
		"--color-success-400": "182 225 158", // #b6e19e
		"--color-success-500": "150 212 117", // #96D475
		"--color-success-600": "135 191 105", // #87bf69
		"--color-success-700": "113 159 88", // #719f58
		"--color-success-800": "90 127 70", // #5a7f46
		"--color-success-900": "74 104 57", // #4a6839
		// warning | #9a7759 
		"--color-warning-50": "240 235 230", // #f0ebe6
		"--color-warning-100": "235 228 222", // #ebe4de
		"--color-warning-200": "230 221 214", // #e6ddd6
		"--color-warning-300": "215 201 189", // #d7c9bd
		"--color-warning-400": "184 160 139", // #b8a08b
		"--color-warning-500": "154 119 89", // #9a7759
		"--color-warning-600": "139 107 80", // #8b6b50
		"--color-warning-700": "116 89 67", // #745943
		"--color-warning-800": "92 71 53", // #5c4735
		"--color-warning-900": "75 58 44", // #4b3a2c
		// error | #F22E2E 
		"--color-error-50": "253 224 224", // #fde0e0
		"--color-error-100": "252 213 213", // #fcd5d5
		"--color-error-200": "252 203 203", // #fccbcb
		"--color-error-300": "250 171 171", // #faabab
		"--color-error-400": "246 109 109", // #f66d6d
		"--color-error-500": "242 46 46", // #F22E2E
		"--color-error-600": "218 41 41", // #da2929
		"--color-error-700": "182 35 35", // #b62323
		"--color-error-800": "145 28 28", // #911c1c
		"--color-error-900": "119 23 23", // #771717
		// surface | #66BCF2 
		"--color-surface-50": "232 245 253", // #e8f5fd
		"--color-surface-100": "224 242 252", // #e0f2fc
		"--color-surface-200": "217 238 252", // #d9eefc
		"--color-surface-300": "194 228 250", // #c2e4fa
		"--color-surface-400": "148 208 246", // #94d0f6
		"--color-surface-500": "102 188 242", // #66BCF2
		"--color-surface-600": "92 169 218", // #5ca9da
		"--color-surface-700": "77 141 182", // #4d8db6
		"--color-surface-800": "61 113 145", // #3d7191
		"--color-surface-900": "50 92 119", // #325c77
		
	}
}