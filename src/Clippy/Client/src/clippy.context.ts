import { agent } from './external/clippy/agents/Clippy/index.js';
import { Agent } from './external/clippy/agent.js';
import { UmbContextBase } from '@umbraco-cms/backoffice/class-api';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

export class UmbClippyContext extends UmbContextBase<UmbClippyContext> {
	#agent = new Agent({ agent: agent });

	public get agent() {
		return this.#agent;
	}

	constructor(host: UmbControllerHost) {
		super(host, UMB_CLIPPY_CONTEXT);
	}

	attachTo(element: HTMLElement) {
		element.style.width = agent.config.framesize[0] + 'px';
		element.style.height = agent.config.framesize[1] + 'px';

		this.#agent.attachTo(element);
	}

	animate() {
		this.#agent.animate();
	}

	hide(fast: boolean = false) {
		this.#agent.hide(fast);
	}

	show() {
		this.#agent.show();
	}
}

export default UmbClippyContext;

export { UmbClippyContext as api };

export const UMB_CLIPPY_CONTEXT = new UmbContextToken<UmbClippyContext>('umbClippyContext');
