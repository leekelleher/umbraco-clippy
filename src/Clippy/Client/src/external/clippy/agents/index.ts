//import Bonzi from "./Bonzi/index.js";
import { Clippy } from "./Clippy/index.js";
// import F1 from "./F1/index.js";
// import Genie from "./Genie/index.js";
// import Genius from "./Genius/index.js";
// import Links from "./Links/index.js";
// import Merlin from "./Merlin/index.js";
// import Peedy from "./Peedy/index.js";
// import Rocky from "./Rocky/index.js";
// import Rover from "./Rover/index.js";

export const agents: Record<string, any> = {
  // Bonzi: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Bonzi);
  //   }),
  Clippy: () =>
    new Promise<any>((resolve) => {
      resolve(Clippy);
    }),
  // F1: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(F1);
  //   }),
  // Genie: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Genie);
  //   }),
  // Genius: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Genius);
  //   }),
  // Links: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Links);
  //   }),
  // Merlin: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Merlin);
  //   }),
  // Peedy: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Peedy);
  //   }),
  // Rocky: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Rocky);
  //   }),
  // Rover: () =>
  //   new Promise<any>((resolve) => {
  //     resolve(Rover);
  //   }),
};
