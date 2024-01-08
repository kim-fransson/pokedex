/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_POKEMON_BASE_URL: string;
  readonly VITE_POKEMON_OFFICIAL_ART_WORK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
