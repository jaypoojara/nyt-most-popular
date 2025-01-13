/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NYT_API_KEY: string;
  readonly MOCK_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
