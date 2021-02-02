let OldSet = require("./set2.js").Set;

class Set extends OldSet {
  constructor() {
    super();
  }

  // 합집합
  union(otherSet) {
    let unionSet = new Set();

    let values = this.values();
    for (let value of values) {
      unionSet.add(value);
    }

    values = otherSet.values();
    for (let value of values) {
      unionSet.add(value);
    }

    return unionSet;
  }

  // 교집합
  intersection(otherSet) {
    let intersectionSet = new Set();

    for (let value of otherSet.values()) {
      if (this.has(value)) {
        intersectionSet.add(value);
      }
    }

    return intersectionSet;
  }

  // 차집합
  difference(otherSet) {
    let differenceSet = new Set();

    for (let value of this.values()) {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
      continue;
    }

    return differenceSet;
  }

  // 부분집합
  isSubset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      for (let value of this.values()) {
        if (otherSet.has(value)) {
          continue;
        }
        return false;
      }
      return true;
    }
  }
}

console.log(OldSet);
