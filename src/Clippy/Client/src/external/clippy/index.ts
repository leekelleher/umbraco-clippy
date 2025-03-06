// https://github.com/lizozom/clippyts/
// MIT License

import type Agent from './agent.js';
import type Animator from './animator.js';
import type Queue from './queue.js';
import type Balloon from './balloon.js';
import { AgentType, AgentWrapper, Clippy } from './types.js';

export const clippy: Clippy = {
	agents: {} as Record<AgentType, AgentWrapper>,
};

export type { Agent, Animator, Queue, Balloon };

export default clippy;
