# JavaScript Coding Standards

These guidelines keep JavaScript code readable and consistent. They follow common ESLint rules; configure ESLint for the project's chosen style and run it before committing.

## General style

- Use `const` by default and `let` when reassignment is needed. Avoid `var`.
- Use 2 spaces for indentation and include semicolons.
- Prefer single quotes for strings, except where escaping would be less clear.
- Use `===` and `!==` rather than loose equality operators.
- Name variables and functions descriptively; use `camelCase` for values and functions, and `PascalCase` for classes.
- Remove unused variables and imports, and avoid unexplained magic values.
- Use braces for control-flow blocks, even when the block contains one statement.

## Conditional statements

### `if` / `else`

- Use `if` / `else` for conditions that evaluate to a boolean.
- Keep conditions simple. Extract complex expressions into named variables or functions.
- Use braces and put `else` on the same line as the closing brace.
- Avoid deeply nested conditions; use early returns when they improve readability.

```js
if (isReady) {
  start();
} else {
  showMessage('Not ready');
}
```

### `switch`

- Use `switch` when comparing one value against several discrete cases.
- Include a `default` case unless all possibilities are explicitly handled.
- End each case with `break`, `return`, or another intentional control-flow statement to prevent accidental fall-through.
- Group cases only when they intentionally share the same behavior.

```js
switch (status) {
  case 'success':
    showSuccess();
    break;
  case 'error':
    showError();
    break;
  default:
    showPending();
}
```

## Logical operators

- Use `&&` for conditions that must all be true and `||` when any condition may be true.
- Use `!` sparingly; prefer a clearly named boolean or a positive condition when it reads better.
- Use `??` when providing a fallback only for `null` or `undefined`; use `||` when all falsy values should trigger the fallback.
- Parenthesize mixed `&&` and `||` expressions to make evaluation order clear.
- Do not rely on implicit truthiness when an explicit comparison makes the intent clearer.

```js
const displayName = user.name ?? 'Guest';

if (user.isActive && (user.isAdmin || user.isOwner)) {
  showDashboard();
}
```

## ESLint

- Keep the project's ESLint configuration in version control and follow its rules rather than overriding rules locally without a reason.
- Run the configured lint command (for example, `npx eslint .`) before submitting changes.
- Fix lint errors; add a narrowly scoped suppression only when a rule is genuinely inappropriate, with a brief explanation.