const Map = require('../ch7.map/map');
const Queue = require('../ch4.queue/queue');
const Stack = require('../ch3.stack/stack');

class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = new Map();
        this.time = 0;
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
            if (callback) {
                callback(u);
            }
        }

        return {
            distances: d,
            predecessor: pred
        }
    }
    dfs() {
        const color = initializeColor(this);

        let d = {};
        let f = {};
        let p = {};

        for (let v of this.vertices) {
            d[v] = 0;
            f[v] = 0;
            p[v] = null;
        }

        this.dfsVisit(this.vertices[0], color, d, f, p);

        return {
            discovery: d,
            finished: f,
            predecessor: p
        }
    }

    dfsVisit(v, color, d, f, p) {
        color[v] = 'grey';
        d[v] = ++this.time;
        let neighbors = this.adjList.get(v);

        for (let u of neighbors) {
            if (color[u] === 'white') {
                p[u] = v;
                this.dfsVisit(u, color, d, f, p);
            }
        }

        color[v] = 'black';
        console.log('탐색 끝: ', v);
        f[v] = ++this.time;
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

// bfs를 이용한 최단거리 구하기
console.log('-----------------------bfs:')

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

// dfs
console.log('-----------------------dfs:')



result = graph.dfs();

console.log("dfs result: ", result);

