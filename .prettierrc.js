import { prettier } from '@parabit/prettier';

export default {
	...prettier,
	plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
	importOrder: [
		'^react$',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@assets|@components|@helpers|@layouts|@pages$',
		'',
		'^[.]',
	],
};
