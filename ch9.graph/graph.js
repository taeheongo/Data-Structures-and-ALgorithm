const { Map } = require("../ch7.map/map");
const { Queue } = require("../ch4.queue/queue");
const { Stack } = require("../ch3.stack/stack");

const WHITE = "white";
const GREY = "grey";
const BLACK = "black";

function initializeColor() {
  let color = {};

  for (let val of this.vertices) {
    color[val] = WHITE;
  }
  return color;
}

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

  // white: not visited
  // grey: visited
  // black: explored
  bfs(v, callback) {
    let color = initializeColor.call(this);

    if (!Object.keys(color).includes(v)) {
      return null;
    }

    let queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);

      for (let w of neighbors) {
        if (color[w] === WHITE) {
          color[w] = GREY;
          queue.enqueue(w);
        }
      }

      color[u] = BLACK;
      if (callback && typeof callback === "function") {
        callback(`${u} 탐색완료`);
      }
    }
  }

  // BFS를 이용해서 최단거리 찾기
  findShortestWayWithBFS(v) {
    let color = initializeColor.call(this);

    if (!Object.keys(color).includes(v)) {
      return null;
    }

    let queue = new Queue();
    queue.enqueue(v);
    let pred = [],
      d = [];

    for (let vertex of this.vertices) {
      d[vertex] = 0;
      pred[vertex] = null;
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);

      for (let w of neighbors) {
        if (color[w] === WHITE) {
          color[w] = GREY;
          queue.enqueue(w);
          d[w] = d[u] + 1;
          pred[w] = u;
        }
      }

      color[u] = BLACK;
    }
    return {
      distances: d,
      predecessors: pred,
    };
  }
}

const graph = new Graph();

const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let val of myVertices) {
  graph.addVertex(val);
}

graph
  .addEdge("A", "B")
  .addEdge("A", "C")
  .addEdge("A", "D")
  .addEdge("C", "D")
  .addEdge("C", "G")
  .addEdge("D", "G")
  .addEdge("D", "H")
  .addEdge("B", "E")
  .addEdge("B", "F")
  .addEdge("E", "I");

graph.toString();

graph.bfs("A", (value) => {
  console.log(value);
});

console.log("findShortestWayWithBFS: ", graph.findShortestWayWithBFS("A"));
