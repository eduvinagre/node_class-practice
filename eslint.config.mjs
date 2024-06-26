import globals from "globals";
import pluginJs from "@eslint/js";
import config from "eslint-config-google";


export default [
  ...[].concat(config),
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
