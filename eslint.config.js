import rhnorskovConfig from "@rhnorskov/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [...rhnorskovConfig, { ignores: ["dist/"] }];

export default eslintConfig;
