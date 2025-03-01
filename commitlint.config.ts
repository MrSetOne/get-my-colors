import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore"],
    ],
    "header-full-stop": [RuleConfigSeverity.Error, "never", "."],
    "header-max-length": [RuleConfigSeverity.Error, "always", 72],
  },
};

export default config;
