// ========== ARRAY METHODS CHEATSHEET ========== //

// 1. Mutating Methods (change original array)
const mutatingExample = [1, 2, 3];

mutatingExample.push(4); // Add to end → [1,2,3,4]
mutatingExample.pop(); // Remove from end → [1,2,3]
mutatingExample.unshift(0); // Add to start → [0,1,2,3]
mutatingExample.shift(); // Remove from start → [1,2,3]
mutatingExample.splice(1, 1, 99); // At index 1: remove 1, add 99 → [1,99,3]
mutatingExample.reverse(); // Reverse array → [3,99,1]
mutatingExample.sort(); // Sort alphabetically → [1,3,99]
mutatingExample.fill(0); // Fill with 0 → [0,0,0]
// 2. Non-Mutating Methods (return new array/value)
const original = [1, 2, 3];

debugger

const mapped = original.map((x) => x * 2); // [2,4,6]
const filtered = original.filter((x) => x > 1); // [2,3]
const reduced = original.reduce((sum, x) => sum + x, 0); // 6
const sliced = original.slice(1, 3); // [2,3] (index 1-2)
const concated = original.concat([4, 5]); // [1,2,3,4,5]
const joined = original.join("-"); // "1-2-3"

// 3. Search Methods
const searchExample = [10, 20, 30, 20];

searchExample.indexOf(20); // 1 (first index)
searchExample.lastIndexOf(20); // 3 (last index)
searchExample.includes(20); // true
searchExample.find((x) => x > 15); // 20 (first match)
searchExample.findIndex((x) => x > 15); // 1 (index of first match)

// 4. ES6+ Modern Methods
const modernExample = [1, [2, [3]]];

modernExample.flat(); // [1, 2, [3]] (flatten 1 level)
modernExample.flat(2); // [1, 2, 3] (flatten 2 levels)
modernExample.flatMap((x) => [x, x * 2]); // [1,2,[2,4,[3]]]
Array.from("123"); // ['1','2','3'] (array from iterable)
Array.of(1, 2, 3); // [1,2,3] (creates new array)

// 5. Iteration Methods
const nums = [1, 2, 3];

nums.forEach((x) => console.log(x)); // Logs each element
nums.some((x) => x > 2); // true (at least one passes)
nums.every((x) => x < 5); // true (all pass)
nums.keys(); // Array Iterator (0,1,2)
nums.values(); // Array Iterator (1,2,3)
nums.entries(); // Array Iterator [[0,1],[1,2],[2,3]]

