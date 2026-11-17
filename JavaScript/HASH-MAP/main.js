const { HashMap } = require("./HashMap");

const map = HashMap();

// set and get
map.set("apple", "red");
map.set("banana", "yellow");
map.set("grape", "purple");

console.log("apple:", map.get("apple"));   // red
console.log("banana:", map.get("banana")); // yellow

// overwrite existing value
map.set("apple", "green");
console.log("apple after overwrite:", map.get("apple")); // green

// has
console.log("has apple:", map.has("apple")); // true
console.log("has mango:", map.has("mango")); // false

// remove
console.log("remove banana:", map.remove("banana")); // true
console.log("has banana:", map.has("banana")); // false

// keys
console.log("keys:", map.keys());

// values
console.log("values:", map.values());

// entries
console.log("entries:", map.entries());

// clear
map.clear();

console.log("after clear:");
console.log("keys:", map.keys());
console.log("values:", map.values());
console.log("entries:", map.entries());