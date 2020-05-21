let OldSet = require('./set2.js');

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
                differenceSet.add(value)
            }
            continue;
        }

        return differenceSet;
    }

    // 부분집합
    subset(otherSet) {
        if (this.size() > otherSet.values()) {
            return false;
        } else {
            for(let value of this.values()){
                if(otherSet.has(value)){
                    continue;
                }
                return false;
            }
            return true;
        }
    }
}

const set1 = new Set();

set1.add(1);
set1.add(2);

const set2 = new Set();

set2.add(1);
set2.add(3);
set2.add(4);

let set3 = set1.union(set2);
console.log(set3.values());

set3 = set1.intersection(set2);
console.log(set3.values());

set3 = set1.difference(set2);
console.log(set3.values());

let isSubset = set3.subset(set1);
console.log(isSubset);