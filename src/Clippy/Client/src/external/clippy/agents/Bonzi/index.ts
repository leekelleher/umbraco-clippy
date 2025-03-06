import { AgentWrapper } from "../../types";
import { agent } from "./agent";
import { soundMp3 } from "./sounds-mp3";
import { soundOgg } from "./sounds-ogg";
import bonziImg from "./map.png";

export const Bonzi: AgentWrapper = {
  name: "Bonzi",
  image: bonziImg,
  config: agent,
  soundMp3,
  soundOgg,
};

export default Bonzi;

export { Bonzi as agent };
