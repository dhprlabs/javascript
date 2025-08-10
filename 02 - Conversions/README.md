## Conversions 

### Why Conversion Matters

- When converting between types (string → number, boolean → number, etc.), JavaScript may **implicitly** or **explicitly** change the value.

- Always check what the actual result will be after conversion, because it might **not** be what you expect.

### Example: String → Integer

- `"33"` → `33` (numeric string converts cleanly)

- `"33abc"` → `NaN` (invalid number inside string)

- `""` → `0` (empty string becomes 0)

- `"0"` → `0`

### Boolean → Integer

- `true` → `1`

- `false` → `0`

### Null / Undefined → Integer

- `null` → `0`

- `undefined` → `NaN`

### Special Notes

- `Number(value)` is used for explicit conversion to number.

- Non-numeric strings or `undefined` result in `NaN`.

- `parseInt()` can extract numbers from strings until it hits a non-numeric character, e.g.,`"42px"` → `42`.

**Pro Tip:** Always validate inputs before conversion to avoid unexpected `NaN` results.