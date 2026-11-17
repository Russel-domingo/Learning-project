// What is a hash code?  Hashing involves taking an input and generating corresponding output.
// Hashing a same input should always return a the same has code, no random generation of components.

// What is Bucket? Bucket are storage that we need to store our elements/value.
// The hast function return an number which serves as a index of the array at which we store a specific key value pair. 

// Example: To Store a person's full name as a KEY "Fred" with a value of "Smith"
// 1: Pass "Fred" into the hash function to get the hash code which 385
// 2: Find the bucket at index 385
// 3: Store the key value pair in the bucket. In this example, the key is "Fred" and the value is "Smith"

// How we get the value using key
// 1: To retrieve the value, we hash the key and calculate the index of its bucket.
// 2: If the bucket is not empty, then we go that bucket.
// 3: Now we compare if the node's key is the same as the same key that was used for the retrieval.
// 4: if it is then we return the node's value. Otherwise we return null.

// Iteration of hash map is does not follow linear iteration. When you iterate them it will not be in order.

// COLLISIONS
// When a different key generate an exact same hash code. When it happen it will land in the same bucket.

// Dealing with Collisions

function stringToNUmber(string) {
    let hasCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
        hasCode = primeNumber * hasCode + string.charCodeAt(i);
    }
    return hasCode;
}

function hash(name, surname) {
    return name.charAt(0) + surname.charAt(0);
}