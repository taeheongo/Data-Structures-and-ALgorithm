const { Map } = require("../ch7.map/map");
const { Queue } = require("../ch4.queue/queue");

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
          if (callback && typeof callback === "function") {
            callback(`${u} visited`);
          }
          queue.enqueue(w);
        }
      }

      color[u] = BLACK;
      if (callback && typeof callback === "function") {
        callback(`${u} finished`);
      }
    }
  }

  // BFS를 이용해서 최단거리 찾기
  BFS(v) {
    let color = initializeColor.call(this);

    if (!Object.keys(color).includes(v)) {
      return null;
    }

    let queue = new Queue();
    queue.enqueue(v);
    let pred = {},
      d = {};

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

  dfs(callback) {
    const color = initializeColor.call(this);
    for (let v of this.vertices) {
      if (color[v] === WHITE) {
        this.dfsVisit(this.vertices[0], color, callback);
      }
    }
  }

  dfsVisit(u, color, callback) {
    color[u] = GREY;
    let neighbors = this.adjList.get(u);

    if (callback && typeof callback === "function") {
      callback(`${u} visited`);
    }

    for (let w of neighbors) {
      if (color[w] === WHITE) {
        this.dfsVisit(w, color, callback);
      }
    }

    color[u] = BLACK;
    if (callback && typeof callback === "function") {
      callback(`${u} finished`);
    }
  }

  DFS() {
    const color = initializeColor.call(this);
    const d = {},
      f = {},
      p = {};

    for (let v of this.vertices) {
      if (color[v] === WHITE) {
        this.DFSVisit(v, color, d, f, p);
      }
    }
    return {
      distances: d,
      predecessors: p,
      finished: f,
    };
  }

  DFSVisit(u, color, d, f, p) {
    color[u] = GREY;
    d[u] = ++this.time;
    let neighbors = this.adjList.get(u);

    for (let w of neighbors) {
      if (color[w] === WHITE) {
        p[w] = u;
        this.DFSVisit(w, color, d, f, p);
      }
    }

    color[u] = BLACK;
    f[u] = ++this.time;
  }
}

module.exports = {
  Graph,
};
