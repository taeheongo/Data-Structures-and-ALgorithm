class Map {
    constructor() {
        this.items = {};
    }
    has(key) {
        return key in this.items;
    }
    set(key, value) {
        this.items[key] = value;
    }
    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }
    values() {
        let values = [];
        for (let key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key]);
            }
        }
        return values;
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    getItems() {
        return this.items;
    }
    keys() {
        let keys = [];
        for (let key in this.items) {
            if (this.has(key)){
                keys.push(key);
            }
        }
        return keys;
    }
}

const map1 = new Map();

map1.set("me", "taeheon");
map1.set("friends", []);

console.log("values:", map1.values());
console.log("keys:", map1.keys());
console.log("get:", map1.get("me"));
map1.remove("me");

console.log("remove: ", map1.getItems());