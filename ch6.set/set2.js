class Set {
    constructor() {
        this.items = {};
    }
    has(value) {
        return this.items.hasOwnProperty(value);
    }
    add(value) {
        if (!this.has(value)) {
            this.items[value] = value;
            return true;
        }
        return false;
    }
    remove(value) {
        if (this.has(value)) {
            delete this.items[value];
            return true;
        }
        return false;
    }
    size() {
        return Object.keys(this.items).length;
    }
    sizeLegacy() {
        let count = 0;
        for (let prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                count++;
            }
        }
        return count;
    }
    values() {
        return Object.keys(this.items);
    }
    valuesLegacy(){
        let props = [];
        for(let prop in this.items){
            props.push(prop);
        }

        return props;
    }
}

// const set1 = new Set();
// console.log(set1);

// set1.add(1);
// set1.add(2);
// console.log(set1);

// console.log("size: ", set1.size());
// console.log("sizeLegacy: ", set1.sizeLegacy());

// console.log("values:", set1.values());
// console.log("valuesLegacy: " , set1.valuesLegacy());

// set1.remove(1);

// console.log("size: ", set1.size());
// console.log("sizeLegacy: ", set1.sizeLegacy());

// console.log("values:", set1.values());
// console.log("valuesLegacy: " , set1.valuesLegacy());

module.exports = Set;