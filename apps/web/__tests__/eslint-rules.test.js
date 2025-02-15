const eslint = require('eslint');
const path = require('path');

describe('ESLint Configuration', () => {
  const linter = new eslint.Linter();
  const config = require('../.eslintrc.js');

  test('typescript rules are configured', () => {
    expect(config.rules['@typescript-eslint/no-explicit-any']).toBe('error');
    expect(config.rules['@typescript-eslint/no-unused-vars']).toBe('error');
    expect(config.rules['@typescript-eslint/no-non-null-assertion']).toBe('error');
  });

  test('react hooks rules are configured', () => {
    expect(config.rules['react-hooks/rules-of-hooks']).toBe('error');
    expect(config.rules['react-hooks/exhaustive-deps']).toBe('warn');
  });

  test('import sorting rules are configured', () => {
    expect(config.rules['simple-import-sort/imports']).toBeDefined();
    expect(config.rules['import/first']).toBe('error');
    expect(config.rules['import/no-duplicates']).toBe('error');
  });

  test('shadcn/ui specific rules are configured', () => {
    expect(config.rules['@typescript-eslint/consistent-type-imports']).toBe('error');
    expect(config.rules['react/display-name']).toBe('off');
    expect(config.rules['@typescript-eslint/no-empty-interface']).toBe('off');
  });
}); 