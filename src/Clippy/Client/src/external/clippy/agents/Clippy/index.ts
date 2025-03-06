import { AgentWrapper } from "../../types.js";
import { agent } from "./agent.js";
import { soundMp3 } from "./sounds-mp3.js";
import { soundOgg } from "./sounds-ogg.js";
import clippyImg from "./map.png";

export const Clippy: AgentWrapper = {
  name: "Clippy",
  image: clippyImg,
  config: agent,
  soundMp3,
  soundOgg,
};

export default Clippy;

export { Clippy as agent };
