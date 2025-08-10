## Comparisons

- **Common task**: Comparing two values happens often in JavaScript.

- **Potential confusion**: Different operators (`==` vs `===`) behave differently, especially with type conversion.

- **TypeScript preference**: Many developers use TypeScript to avoid type-related comparison issues.

### `==` (Double Equals)

- Performs **type conversion** before comparison.

- Special handling for:

    - `NaN` → `NaN != NaN`

    - `-0` and `+0` → considered equal

- May lead to unexpected results due to implicit conversions.

### `===` (Triple Equals)

- **Strict comparison** → no type conversion.

- Returns `false` if types differ.

- Still has the same special handling for:

    - `NaN` (always not equal to itself)

    - `-0` and `+0` (considered equal)

**Best Practice**: Prefer `===` for predictable behavior.