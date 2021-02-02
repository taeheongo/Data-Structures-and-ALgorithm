const { LinkedList } = require("../ch5.linkedList/linkedList");
const { loseloseHashCode, djb2HashCode } = require("./hashFunctions");

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${key} ${value}]`;
  }
}

class HashTable {
  constructor() {
    this.table = {};
  }

  put(key, value) {
    let position = djb2HashCode(key);
    if (!this.table[position]) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append(new ValuePair(key, value));
    return this;
  }

  get(key) {
    let position = djb2HashCode(key);

    if (this.table[position] !== undefined) {
      let current = this.table[position].getHead();
      let values = [];

      while (current) {
        if (current.element.key === key) {
          values.push(current.element.value);
        }
        current = current.next;
      }

      return values.length > 0 ? values : null;
    } else {
      return null;
    }
  }

  remove(key) {
    let position = djb2HashCode(key);
    if (this.table[position] !== undefined) {
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

// const hashTable = new HashTable();

// hashTable
//   .put("red", "apple")
//   .put("red", "ramen")
//   .put("red", "kimchi")
//   .put("blue", "sea")
//   .put("blue", "sky");

// console.log(hashTable);

// console.log(hashTable.get("red"));
// console.log(hashTable.get("blue"));

// console.log(hashTable.remove("red"));
// console.log(hashTable.get("red"));

module.exports = {
  HashTable,
};
