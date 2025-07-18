import { RuleConfigSeverity } from '@commitlint/types';

const headerPatternRule = (parsed, _, value) => {
  const regex = new RegExp(value);
  return [
    regex.test(parsed.header),
    'Commit message must be "PG-{number}: {at least 3 symbols}" e.g. "PG-123: Fix issue"',
  ];
};

const headerPatternPlugin = {
  rules: {
    'header-pattern': headerPatternRule,
  },
};

export default {
  extends: [],
  plugins: [headerPatternPlugin],
  rules: {
    'header-pattern': [
      RuleConfigSeverity.Error,
      'always',
      '^PG-\\d+: .{3,}$',
    ],
  },
};