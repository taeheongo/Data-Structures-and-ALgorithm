const LinkedList = require('../ch5.linkedList/linkedList');

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return '[' + key + value + ']';
    }
}

class HashTable {
    constructor() {
        this.table = {};
    }

    put(key, value) {
        let position = loseloseHashCode(key);
        if (!this.table[position]) {
            this.table[position] = new LinkedList();
        }
        this.table[position].append(new ValuePair(key, value))
        return this;
    }

    get(key) {
        let position = loseloseHashCode(key);

        if (this.table[position]) {
            let current = this.table[position].getHead();

            while (current) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current.next = current;
            }

            return null;
        } else {
            return null;
        }
    }

    remove(key) {
        let position = loseloseHashCode(key);
        if (this.table[position]) {
            let current = this.table[position].getHead();

            while (current) {
                if (current.element.key === key) {
                    this.table[position].remove(current.element);
                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            return false;
        } else {
            return null;
        }
    }
}

const loseloseHashCode = key => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }

    return hash % 37;
}

const hashTable = new HashTable();

hashTable
    .put('red', 'apple')
    .put('red', 'ramen')
    .put('red', 'kimchi')
    .put('blue', 'sea')
    .put('blue', 'sky');

console.log(hashTable);

console.log(hashTable.get('red'));
console.log(hashTable.get('blue'))

console.log(hashTable.remove('red'));
console.log(hashTable.get('red'));