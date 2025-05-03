# interview-preparation
interview-preparation all methods:


Here is a comprehensive list of JavaScript (JS) methods categorized by their respective objects or data types. Note that JavaScript is constantly evolving, so new methods may be added in newer versions (ES6+, ES2023, etc.).

---

### **Array Methods**
1. **`concat()`** – Merges arrays.
2. **`copyWithin()`** – Copies part of an array to another position.
3. **`entries()`** – Returns an array iterator.
4. **`every()`** – Checks if all elements pass a test.
5. **`fill()`** – Fills elements with a static value.
6. **`filter()`** – Creates a new array with filtered elements.
7. **`find()`** – Returns the first matching element.
8. **`findIndex()`** – Returns the index of the first matching element.
9. **`flat()`** – Flattens nested arrays.
10. **`flatMap()`** – Maps and then flattens.
11. **`forEach()`** – Executes a function for each element.
12. **`includes()`** – Checks if an array contains a value.
13. **`indexOf()`** – Returns the first index of an element.
14. **`join()`** – Joins elements into a string.
15. **`keys()`** – Returns an array iterator of keys.
16. **`lastIndexOf()`** – Returns the last index of an element.
17. **`map()`** – Creates a new array with modified elements.
18. **`pop()`** – Removes the last element.
19. **`push()`** – Adds elements to the end.
20. **`reduce()`** – Reduces to a single value (left-to-right).
21. **`reduceRight()`** – Reduces (right-to-left).
22. **`reverse()`** – Reverses the array.
23. **`shift()`** – Removes the first element.
24. **`slice()`** – Extracts a portion of an array.
25. **`some()`** – Checks if any element passes a test.
26. **`sort()`** – Sorts elements.
27. **`splice()`** – Adds/removes elements.
28. **`toLocaleString()`** – Converts to a localized string.
29. **`toString()`** – Converts to a string.
30. **`unshift()`** – Adds elements to the beginning.
31. **`values()`** – Returns an iterator of values.
32. **`at()`** (ES2022) – Gets an element by index (supports negative indices).

---

### **String Methods**
1. **`charAt()`** – Returns the character at an index.
2. **`charCodeAt()`** – Returns Unicode of a character.
3. **`codePointAt()`** – Returns Unicode code point.
4. **`concat()`** – Joins strings.
5. **`endsWith()`** – Checks if a string ends with a substring.
6. **`includes()`** – Checks if a string contains a substring.
7. **`indexOf()`** – Returns the index of a substring.
8. **`lastIndexOf()`** – Returns the last index of a substring.
9. **`localeCompare()`** – Compares strings based on locale.
10. **`match()`** – Searches using a regex.
11. **`matchAll()`** (ES2020) – Returns all regex matches.
12. **`normalize()`** – Normalizes Unicode.
13. **`padEnd()`** – Pads the end of a string.
14. **`padStart()`** – Pads the start of a string.
15. **`repeat()`** – Repeats a string.
16. **`replace()`** – Replaces matched substrings.
17. **`replaceAll()`** (ES2021) – Replaces all occurrences.
18. **`search()`** – Searches with regex.
19. **`slice()`** – Extracts a substring.
20. **`split()`** – Splits into an array.
21. **`startsWith()`** – Checks if a string starts with a substring.
22. **`substring()`** – Extracts a substring.
23. **`toLocaleLowerCase()`** – Converts to lowercase (locale-aware).
24. **`toLocaleUpperCase()`** – Converts to uppercase (locale-aware).
25. **`toLowerCase()`** – Converts to lowercase.
26. **`toString()`** – Returns the string itself.
27. **`toUpperCase()`** – Converts to uppercase.
28. **`trim()`** – Removes whitespace from both ends.
29. **`trimStart()`** / **`trimLeft()`** – Trims the start.
30. **`trimEnd()`** / **`trimRight()`** – Trims the end.
31. **`valueOf()`** – Returns primitive value.

---

### **Object Methods**
1. **`Object.assign()`** – Copies properties from source to target.
2. **`Object.create()`** – Creates a new object with a prototype.
3. **`Object.defineProperty()`** – Defines a property with descriptors.
4. **`Object.defineProperties()`** – Defines multiple properties.
5. **`Object.entries()`** – Returns an array of key-value pairs.
6. **`Object.freeze()`** – Prevents modifications.
7. **`Object.fromEntries()`** (ES2019) – Converts key-value pairs to an object.
8. **`Object.getOwnPropertyDescriptor()`** – Gets property descriptors.
9. **`Object.getOwnPropertyNames()`** – Returns all property names.
10. **`Object.getOwnPropertySymbols()`** – Returns symbol properties.
11. **`Object.getPrototypeOf()`** – Gets the prototype.
12. **`Object.hasOwn()`** (ES2022) – Checks if a property exists (alternative to `hasOwnProperty`).
13. **`Object.is()`** – Compares values (like `===` but treats `NaN` and `±0` differently).
14. **`Object.isExtensible()`** – Checks if an object is extensible.
15. **`Object.isFrozen()`** – Checks if frozen.
16. **`Object.isSealed()`** – Checks if sealed.
17. **`Object.keys()`** – Returns an array of keys.
18. **`Object.preventExtensions()`** – Prevents adding new properties.
19. **`Object.seal()`** – Prevents adding/deleting properties.
20. **`Object.setPrototypeOf()`** – Sets the prototype.
21. **`Object.values()`** – Returns an array of values.

---

### **Function Methods**
1. **`apply()`** – Calls a function with a given `this` and arguments as an array.
2. **`bind()`** – Creates a new bound function.
3. **`call()`** – Calls a function with a given `this` and arguments.
4. **`toString()`** – Returns the function's source code.

---

### **Number Methods**
1. **`toExponential()`** – Converts to exponential notation.
2. **`toFixed()`** – Formats with fixed decimal places.
3. **`toLocaleString()`** – Converts to a localized string.
4. **`toPrecision()`** – Formats with a specified precision.
5. **`toString()`** – Converts to a string.
6. **`valueOf()`** – Returns the primitive value.

---

### **Math Methods**
1. **`Math.abs()`** – Absolute value.
2. **`Math.acos()`** – Arccosine.
3. **`Math.acosh()`** – Hyperbolic arccosine.
4. **`Math.asin()`** – Arcsine.
5. **`Math.asinh()`** – Hyperbolic arcsine.
6. **`Math.atan()`** – Arctangent.
7. **`Math.atan2()`** – Arctangent of quotient.
8. **`Math.atanh()`** – Hyperbolic arctangent.
9. **`Math.cbrt()`** – Cube root.
10. **`Math.ceil()`** – Rounds up.
11. **`Math.clz32()`** – Counts leading zeros in 32-bit binary.
12. **`Math.cos()`** – Cosine.
13. **`Math.cosh()`** – Hyperbolic cosine.
14. **`Math.exp()`** – Exponential function.
15. **`Math.expm1()`** – `e^x - 1`.
16. **`Math.floor()`** – Rounds down.
17. **`Math.fround()`** – Nearest 32-bit float.
18. **`Math.hypot()`** – Square root of the sum of squares.
19. **`Math.imul()`** – 32-bit multiplication.
20. **`Math.log()`** – Natural logarithm.
21. **`Math.log10()`** – Base-10 logarithm.
22. **`Math.log1p()`** – `ln(1 + x)`.
23. **`Math.log2()`** – Base-2 logarithm.
24. **`Math.max()`** – Maximum value.
25. **`Math.min()`** – Minimum value.
26. **`Math.pow()`** – Exponentiation.
27. **`Math.random()`** – Random number between 0 and 1.
28. **`Math.round()`** – Rounds to nearest integer.
29. **`Math.sign()`** – Sign of a number.
30. **`Math.sin()`** – Sine.
31. **`Math.sinh()`** – Hyperbolic sine.
32. **`Math.sqrt()`** – Square root.
33. **`Math.tan()`** – Tangent.
34. **`Math.tanh()`** – Hyperbolic tangent.
35. **`Math.trunc()`** – Removes fractional digits.

---

### **Date Methods**
1. **`getDate()`** – Day of the month (1-31).
2. **`getDay()`** – Day of the week (0-6).
3. **`getFullYear()`** – Full year (e.g., 2023).
4. **`getHours()`** – Hours (0-23).
5. **`getMilliseconds()`** – Milliseconds (0-999).
6. **`getMinutes()`** – Minutes (0-59).
7. **`getMonth()`** – Month (0-11).
8. **`getSeconds()`** – Seconds (0-59).
9. **`getTime()`** – Timestamp in milliseconds.
10. **`getTimezoneOffset()`** – Timezone offset in minutes.
11. **`setDate()`** – Sets the day.
12. **`setFullYear()`** – Sets the year.
13. **`setHours()`** – Sets hours.
14. **`setMilliseconds()`** – Sets milliseconds.
15. **`setMinutes()`** – Sets minutes.
16. **`setMonth()`** – Sets month.
17. **`setSeconds()`** – Sets seconds.
18. **`setTime()`** – Sets timestamp.
19. **`toISOString()`** – Converts to ISO string.
20. **`toJSON()`** – JSON representation.
21. **`toLocaleDateString()`** – Locale-specific date string.
22. **`toLocaleTimeString()`** – Locale-specific time string.
23. **`toString()`** – String representation.
24. **`valueOf()`** – Primitive value (timestamp).

---

### **JSON Methods**
1. **`JSON.parse()`** – Parses JSON string to an object.
2. **`JSON.stringify()`** – Converts an object to a JSON string.

---

### **Promise Methods**
1. **`Promise.all()`** – Waits for all promises to resolve.
2. **`Promise.allSettled()`** (ES2020) – Waits for all to settle (resolve/reject).
3. **`Promise.any()`** (ES2021) – Resolves when any promise resolves.
4. **`Promise.race()`** – Resolves/rejects when the first promise settles.
5. **`Promise.reject()`** – Returns a rejected promise.
6. **`Promise.resolve()`** – Returns a resolved promise.

---

### **Map & Set Methods**
#### **Map**
1. **`set()`** – Adds a key-value pair.
2. **`get()`** – Retrieves a value by key.
3. **`has()`** – Checks if a key exists.
4. **`delete()`** – Removes a key-value pair.
5. **`clear()`** – Clears the map.
6. **`size`** – Returns the number of entries.
7. **`entries()`** – Returns an iterator of key-value pairs.
8. **`keys()`** – Returns an iterator of keys.
9. **`values()`** – Returns an iterator of values.

#### **Set**
1. **`add()`** – Adds a value.
2. **`has()`** – Checks if a value exists.
3. **`delete()`** – Removes a value.
4. **`clear()`** – Clears the set.
5. **`size`** – Returns the number of values.
6. **`entries()`** – Returns an iterator of `[value, value]` pairs.
7. **`keys()`** / **`values()`** – Returns an iterator of values.

---

### **RegExp Methods**
1. **`exec()`** – Executes a search, returning match details.
2. **`test()`** – Tests for a match.
3. **`toString()`** – Returns the regex pattern as a string.

---

### **TypedArray Methods**
(Similar to Array methods but optimized for binary data)
- **`filter()`**, **`map()`**, **`reduce()`**, etc.

---

### **ES6+ Modules (Import/Export)**
1. **`import`** – Imports modules.
2. **`export`** – Exports modules.
3. **`import()`** (Dynamic import) – Async module loading.

---

### **Other Globals**
1. **`isNaN()`** – Checks if a value is `NaN`.
2. **`isFinite()`** – Checks if a value is finite.
3. **`parseInt()`** – Parses a string to an integer.
4. **`parseFloat()`** – Parses a string to a float.
5. **`encodeURI()`** / **`decodeURI()`** – Encodes/decodes URIs.
6. **`encodeURIComponent()`** / **`decodeURIComponent()`** – Encodes/decodes URI components.

---

This list covers most built-in JavaScript methods. For browser-specific APIs (like `document.querySelector()`, `fetch()`, etc.), check the Web APIs documentation. Let me know if you'd like details on any specific method! 🚀
