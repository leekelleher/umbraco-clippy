export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'globalContext',
		alias: 'Umb.GlobalContext.Clippy',
		name: '[Clippy] Global Context',
		api: () => import('./clippy.context.js'),
	},
	{
		type: 'backofficeEntryPoint',
		alias: 'Umb.Clippy.EntryPoint.Loader',
		name: '[Clippy] Entry Point Loader',
		js: () => import('./loader.js'),
	},
];
