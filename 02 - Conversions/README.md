# Type Conversions

JavaScript is **dynamically typed**, meaning variables can change type at runtime.  
Conversions can be **implicit** (done by JavaScript automatically) or **explicit** (done manually by the developer).  

## Why Conversion Matters

- Converting between types can **change the value or meaning** of data.
- Misunderstanding conversions can lead to **bugs** in logic.
- JavaScript may **coerce values** in unexpected ways due to **type coercion** rules.

**Key takeaway:** Always know the result after conversion — it might not be what you expect.

## Types of Conversion

### 1. String → Number

#### Examples
```javascript
Number("33");     // 33
Number("33abc");  // NaN
Number("");       // 0
Number("0");      // 0
```

**Notes:**
- `"33"` → clean numeric string, converts fine.
- `"33abc"` → invalid numeric string, results in `NaN`.
- `""` (empty string) → `0`.
- `"0"` → numeric string for zero.

---

### 2. Boolean → Number

#### Examples
```javascript
Number(true);   // 1
Number(false);  // 0
```

**Notes:**
- `true` always converts to `1`.
- `false` always converts to `0`.

---

### 3. Null / Undefined → Number

#### Examples
```javascript
Number(null);       // 0
Number(undefined);  // NaN
```

**Notes:**
- `null` is treated as zero when converting to a number.
- `undefined` becomes `NaN` (Not-a-Number).

---

### 4. Using `parseInt()` and `parseFloat()`

`parseInt()` reads numbers until it hits a non-numeric character.  
`parseFloat()` works the same but keeps decimals.

#### Examples
```javascript
parseInt("42px");     // 42
parseInt("42.9");     // 42
parseFloat("42.9px"); // 42.9
```

**Notes:**
- Best for extracting numbers from strings with units.
- Ignores trailing non-numeric characters.
- Always specify **radix** in `parseInt()` to avoid base issues:
```javascript
parseInt("010", 10); // 10 (decimal)
```

---

## Implicit Conversion (Type Coercion)

JavaScript sometimes **automatically converts** values when using operators.

#### Examples
```javascript
"5" - 2;   // 3   (string → number)
"5" + 2;   // "52" (number → string due to '+')
true + 1;  // 2   (boolean → number)
```

**Rules:**
- `+` with a string → converts the other value to string (concatenation).
- Other arithmetic (`-`, `*`, `/`) → converts strings/booleans to numbers.

---

## Interview-Level Notes

1. **Difference between `Number()` and `parseInt()`**  
   - `Number("42px")` → `NaN` (needs full numeric string)  
   - `parseInt("42px")` → `42` (extracts until non-digit)

2. **`NaN` Type Check**  
   - `typeof NaN` → `"number"` (quirky JS behavior)  
   - Use `Number.isNaN(value)` for strict NaN check.

3. **Falsy Values in Conversion**
   - `false`, `0`, `""`, `null`, `undefined`, `NaN` → all become `false` in Boolean context.

4. **Truthy Values**
   - Everything else is `true` in Boolean context, including `"0"`, `"false"`, and `[]`.

5. **Special Case: `null == undefined`**
   - `null == undefined` → `true` (loose equality)
   - `null === undefined` → `false` (strict equality)

---

## Quick Reference Table

| Original Value | `Number()` | `parseInt()` | `Boolean()` | Notes |
|----------------|-----------|--------------|-------------|-------|
| `"33"`         | 33        | 33           | true        | Numeric string |
| `"33abc"`      | NaN       | 33           | true        | parseInt stops at `a` |
| `""`           | 0         | NaN          | false       | Empty string |
| `"0"`          | 0         | 0            | true        | String "0" is truthy |
| `true`         | 1         | NaN          | true        | Boolean true |
| `false`        | 0         | NaN          | false       | Boolean false |
| `null`         | 0         | NaN          | false       | Null as zero |
| `undefined`    | NaN       | NaN          | false       | Undefined as NaN |

---

## Pro Tips

- Always **validate inputs** before conversion to avoid `NaN` issues.
- Use **strict equality (`===`)** to avoid unwanted type coercion.
- Be careful when using `+` with mixed types.
- For numeric extraction from strings, **prefer `parseInt()`/`parseFloat()`** over `Number()`.

---

## Common Interview Questions

1. What’s the difference between `Number()`, `parseInt()`, and `parseFloat()`?
2. How does JavaScript handle `null` and `undefined` in numeric conversions?
3. Why does `"5" + 2` return `"52"` but `"5" - 2` returns `3`?
4. What is `typeof NaN` and why?
5. Explain truthy and falsy values in JavaScript.
6. How do you check if a value is `NaN` without false positives?
7. What’s the difference between implicit and explicit type conversion?
