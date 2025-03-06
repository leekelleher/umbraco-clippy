export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'globalContext',
		alias: 'Umb.Clippy.GlobalContext',
		name: '[Clippy] Global Context',
		api: () => import('./clippy.context.js'),
	},
	{
		type: 'backofficeEntryPoint',
		alias: 'Umb.Clippy.EntryPoint',
		name: '[Clippy] Entry Point',
		js: () => import('./entry-point.js'),
	},
];
