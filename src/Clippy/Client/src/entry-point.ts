import { UmbClippyElement } from './clippy.element.js';
import type { UmbEntryPointOnInit, UmbEntryPointOnUnload } from '@umbraco-cms/backoffice/extension-api';

export const onInit: UmbEntryPointOnInit = (host, _extensionRegistry) => {
	const clippy = new UmbClippyElement();
	host.shadowRoot?.appendChild(clippy);
};

export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
	// Do nothing
};
