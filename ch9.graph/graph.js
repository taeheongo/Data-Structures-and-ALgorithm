const Map = require('../ch7.map/map');
const Queue = require('../ch4.queue/queue');
const Stack = require('../ch3.stack/stack');

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
        return this;
    }

    toString() {
        for (let v of this.vertices) {
            let string = `${v} => `;
            let length = this.adjList.has(v) ? this.adjList.get(v).length : 0;
            for (let i = 0; i < length; i++) {
                string += `${this.adjList.get(v)[i]} `;
            }
            console.log(string);
        }
    }

    bfs(v, callback) {
        let color = initializeColor(this);
        let queue = new Queue();
        let d = {};
        let pred = {};
        queue.enqueue(v);

        for (let ver of this.vertices) {
            d[ver] = 0;
            pred[ver] = null;
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = this.adjList.get(u);
            color[u] = 'grey';

            for (let n of neighbors) {
                if (color[n] === 'white') {
                    color[n] = 'grey';
                    d[n] = d[u] + 1;
                    pred[n] = u;
                    queue.enqueue(n);
                }
            }
            color[u] = 'black';
            callback(u);
        }

        return {
            distances: d,
            predecessor: pred
        }
    }

}

function initializeColor(graph) {
    let color = {};
    for (let v of graph.vertices) {
        color[v] = 'white';
    }

    return color;
}


const graph = new Graph();

for (let num = 65; num <= 73; num++) {
    graph.addVertex(String.fromCharCode(`${num}`));
}

console.log(graph);

graph
    .addEdge('A', 'B')
    .addEdge('A', 'C')
    .addEdge('A', 'D')
    .addEdge('C', 'D')
    .addEdge('C', 'G')
    .addEdge('D', 'G')
    .addEdge('D', 'H')
    .addEdge('B', 'E')
    .addEdge('B', 'F')
    .addEdge('E', 'I');

graph.toString();
let result = graph.bfs(graph.vertices[0], (value) => {
    console.log('탐색 끝: ', value);
})

console.log("bfs result: ", result);

let fromVertex = graph.vertices[0];

for (let i = 1; i < graph.vertices.length; i++) {
    let toVertex = graph.vertices[i];
    let path = new Stack();

    for (let v = toVertex; v !== fromVertex; v = result.predecessor[v]) {
        path.push(v);
    }

    let string = `${fromVertex}`;
    while (!path.isEmpty()) {
        string += ` - ${path.pop()}`
    }

    console.log(string);
}
