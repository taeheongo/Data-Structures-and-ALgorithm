import '../ch4.queue/queue.dart';

typedef Callback = dynamic Function(dynamic value);

class Graph {
  final _vertices = [];
  final _adjList = {};

  void addVertex(v) {
    _vertices.add(v);
    _adjList[v] = [];
  }

  void addEdge(v, w) {
    _adjList[v].add(w);
    _adjList[w].add(v);
  }

  @override
  String toString() {
    var s = '';
    for (var v in _vertices) {
      s += '$v -> ';
      for (var w in _adjList[v]) {
        s += '$w ';
      }
      s += '\n';
    }
    return s;
  }

  Map<dynamic, State> _initState() {
    var state = <dynamic, State>{};

    for (var v in _vertices) {
      state[v] = State.unvisited;
    }

    return state;
  }

  // breadth first seearch
  bfs(v, Callback callback) {
    var state = _initState();
    var queue = Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = _adjList[u];
      state[u] = State.visited;

      for (var n in neighbors) {
        if (state[n] == State.unvisited) {
          state[n] = State.visited;
          queue.enqueue(n);
        }
      }

      state[u] = State.searched;

      if (callback != null) {
        callback(u);
      }
    }
  }

  // modified bfs
  Map<String, Map> BFS(v, Callback callback) {
    var state = _initState();
    var queue = Queue();
    var d = {};
    var pred = {};
    queue.enqueue(v);

    for (var vert in _vertices) {
      d[vert] = 0;
      pred[vert] = null;
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = _adjList[u];
      state[u] = State.visited;

      for (var n in neighbors) {
        if (state[n] == State.unvisited) {
          state[n] = State.visited;
          d[n] = d[u] + 1;
          pred[n] = u;
          queue.enqueue(n);
        }
      }

      state[u] = State.searched;

      if (callback != null) {
        callback(u);
      }
    }

    return {
      'distances': d,
      'predecessors': pred,
    };
  }
}

enum State { unvisited, visited, searched }
