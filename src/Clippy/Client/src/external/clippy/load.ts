import Agent from './agent.js'
import { agents } from './agents/index.js';
import { AgentWrapper, LoadOptions } from './types.js';

export const load = (options: LoadOptions) => {
    const {
        name,
        successCb,
        failCb,
        element,
    } = options || {};

    // wrapper to the success callback
    agents[name]().then((agentConfig: AgentWrapper) => {
        const a = new Agent({
            agent: agentConfig,
            element
        });
        if (successCb) successCb(a);
    }).catch((error: any) => {
        if (failCb) failCb(error);
    });

}
