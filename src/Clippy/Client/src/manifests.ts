export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "backofficeEntryPoint",
    alias: "Clippy.EntryPoint.Loader",
    name: "[Clippy] Entry Point Loader",
    js: () => import("./loader.js"),
  }
];
