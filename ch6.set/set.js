class Set {
    constructor() {
        this.items = {};
        this.index = 0;
    }

    add(value) {
        if (!(this.has(value))) {
            this.items[this.index++] = value;
            return true;
        }
        return false;
    }

    remove(value) {
        let isDeleted = false;
        Object.keys(this.items).forEach((elem,i) => {
            if(this.items[elem]=== value){
                delete this.items[i];
                isDeleted = true;
            }
        });
        return isDeleted;
    }

    entries() {
        const keys = Object.keys(this.items).map((val) => {
            return parseInt(val, 10);
        })
        return keys.sort((a, b) => a - b )
    }

    values(){
        const sortedKeys = this.entries();

        return sortedKeys.map((val, i)=>{
            return this.items[i];
        })
    }

    has(value) {
        let keys = Object.keys(this.items);
        for (let i in keys) {
            if (this.items[i] === value) return true;
        }
        return false;
    }

    clear() {
        this.items = {};
        return true;
    }

    size() {
        return Object.keys(this.items).length;
    }

    union(otherSet){
        const unionSet = new Set();
        
        for(let val of this.values()){
            unionSet.add(val);
        }

        for(let val of otherSet.values()){
            unionSet.add(val);
        }

        return unionSet;
    }

    intersection(otherSet){
        const intersectionAB = new Set();

        for(let val of this.values()){
            if(otherSet.has(val)){
                intersectionAB.add(val);
            }
        }

        return intersectionAB;
    }

    difference(otherSet){
        var differenceAB = new Set();

        for(let val of this.values()){
            if(!otherSet.has(val)){
                differenceAB.add(val);
            }
        }
        return differenceAB;
    }
    
    subset(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }else{
            const values = this.values();
            for(let val of values){
                if(!otherSet.has(val)) return false;
            }
            return true;
        }
    }
}

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);

const set2 = new Set();
set2.add(4);
set2.add(5);
set2.add(6);

const set3 = set1.union(set2);
console.log(set3.values());     // [1, 2, 3, 4, 5, 6]
const set4 = set3.intersection(set1);
console.log(set4.values());     // [1, 2, 3]
const set5 = set3.difference(set1); 
console.log(set5.values());     // [4, 5, 6]

console.log(set1.subset(set3)); // true