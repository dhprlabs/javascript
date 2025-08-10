## Date and Time 

- Date object is used to work with dates and times in JavaScript.

- Internally, dates are stored as milliseconds since Jan 1, 1970 (UTC) (Unix Epoch).

- Months are 0-based: `0 = January`, `6 = July`, `11 = December`

### Ways to create a Date:

```js
new Date() // current date & time
new Date(year, monthIndex, day, hours, minutes) // specific date/time
new Date("YYYY-MM-DD") // from a date string
Date.now() // current timestamp (in ms)
```

### Common formatting methods:

```js
.toString() // human-readable string (local time)
.toDateString() // date only, readable format
.toISOString() / .toJSON() // ISO 8601 UTC string
.toLocaleDateString() // date only, local format
.toLocaleString() // date + time, local format
```

### Getting timestamps:

```js
.getTime() // timestamp in ms for a date object
```

### Comparing dates:

- Subtract one timestamp from another → difference in milliseconds (convert to seconds/minutes/hours/days as needed)

- All calculations are time zone–independent, but formatting depends on your system locale.