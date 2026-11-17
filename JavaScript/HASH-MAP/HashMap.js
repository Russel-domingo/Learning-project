function HashMap() {

    const loadFactor = 0.75;
    let capacity = 16;
    let buckets = new Array(capacity).fill(null).map(() => []);
    let size = 0;

    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }

    function set(key, value) {
        // if new key
        if (((size + 1) / capacity) > loadFactor)  {
            resize();
        }

        const index = hash(key);
        const bucket = buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if(bucket[i].key === key) {
                bucket[i].value = value;
                return
            }
           
        }
        bucket.push({key, value});
        size++;
    }

    function resize() {
        const oldBuckets = buckets;

        capacity *= 2;
        buckets = new Array(capacity).fill(null).map(() => []);
        
        size = 0;

        for (let i = 0; i < oldBuckets.length; i++) {
            const bucket = oldBuckets[i];

            for(let j = 0; j < bucket.length; j++) {
                set(bucket[j].key, bucket[j].value);
            }
        }
    }

    function get(key) {
        const index = hash(key);
        const bucket = buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }

        return null;
    }

    function has(key) {
        const index = hash(key);
        const bucket = buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return true;
            }
        }
        return false;
    }

    function remove(key) {
        const index = hash(key);
        const bucket = buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                size--;
                return true;
            }
        }
        return false;
    }

    function clear() {
        buckets = new Array(capacity).fill(null).map(() => []);
        size = 0;
    }

    function keys() {

        let results = [];

        for (let i = 0; i < buckets.length; i++) {
            const bucket = buckets[i];
            
            for (let j = 0; j < bucket.length; j++) {
                results.push(bucket[j].key);
            }
        }
        return results;
    }

    function values() {
        let results = [];

        for (let i = 0; i < buckets.length; i++) {
            const bucket = buckets[i];

            for(let j = 0; j < bucket.length; j++) {
                results.push(bucket[j].value);
            }
        }
        
        return results;
    }

    function entries() {
        const results = [];

        for (let i = 0; i < buckets.length; i++) {
            const bucket = buckets[i];

            for (let j = 0; j < bucket.length; j++) {
                results.push([bucket[j].key, bucket[j].value]);
            }
        }

        return results;
    }

    function length(){
        return size;
    }
    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    }
}

module.exports = {HashMap};