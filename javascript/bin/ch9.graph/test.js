const { Graph } = require("./graph");
const { Stack } = require("../ch3.stack/stack");

// BFS를 이용한 각 노드에사 특정 노드까지 모든 최단거리 찾는 함수
function findShortestWayWithBFS(graph, v) {
  const preds = graph.BFS(v).predecessors;
  const predKeys = Object.keys(preds).filter((elem) => elem !== v);
  const stack = new Stack();

  for (let u of predKeys) {
    for (let w = u; w !== v; w = preds[w]) {
      stack.push(w);
    }
    let s = "";
    while (!stack.isEmpty()) {
      s += ` <= ${stack.pop()}`;
    }
    console.log(`${v}${s}`);
  }
}

// DFS를 이용해서 DAG(Directed Acyclic Graph)의 위상정렬 구하는 함수
// DAG = 방향성있고 사이클이업는 그래프
// 위상정렬 = 먼저해야하는 순으로 정렬(시간값이 큰 순서에서 작은 순서로)
function findTopSort(dag) {
  let sortedArray = [];
  let { finished } = dag.DFS();

  for (let key of Object.keys(finished)) {
    sortedArray.push({
      key,
      value: finished[key],
    });
  }

  sortedArray.sort((a, b) => {
    return b.value - a.value;
  });

  let s = "";
  sortedArray.forEach((item) => {
    if (s === "") {
      s += item.key;
    } else {
      s += "-" + item.key;
    }
  });

  return s;
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

// bfs
console.log("-----------------------------");
console.log("bfs: ");
graph.bfs("A", (value) => console.log(value));

// 개선된 bfs
console.log("BFS: ", graph.BFS("A"));

// 각 노드에서 해당 노드로의 최단거리들 출력
console.log("Shortest Way with BFS: ");
findShortestWayWithBFS(graph, "B");

// dfs
console.log("-----------------------------");
console.log("dfs: ");
graph.dfs((value) => console.log(value));

// 개선된 dfs
console.log("DFS:", graph.DFS());
console.log("-----------------------------");
// A -> C, A -> D
// B => D, B => E
// C => F
// F => E
class DAG extends Graph {
  addEdge(v, w) {
    this.adjList.get(v).push(w); // 방향성 있음
    return this;
  }
}

const dag = new DAG();
let myVertices2 = ["A", "B", "C", "D", "E", "F"];
for (let v of myVertices2) {
  dag.addVertex(v);
}

dag.addEdge("A", "C");
dag.addEdge("A", "D");
dag.addEdge("B", "D");
dag.addEdge("B", "E");
dag.addEdge("C", "F");
dag.addEdge("F", "E");

// 위상정렬
console.log("top sort:", findTopSort(dag));
