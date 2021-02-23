import '../ch4.queue/queue.dart';

typedef Callback = dynamic Function(dynamic value);

class Graph {
  final _vertices = [];
  final _adjList = {};
  int time = 0;

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
    var d = {}; // distance from v
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

  dfs(Callback callback) {
    var state = _initState();
    for (var v in _vertices) {
      if (state[v] == State.unvisited) {
        _dfsVisit(v, state, callback);
      }
    }
  }

  _dfsVisit(u, Map<dynamic, State> state, Callback callback) {
    state[u] = State.visited;
    var neighbors = _adjList[u];
    callback(u);

    for (var n in neighbors) {
      if (state[n] == State.unvisited) {
        _dfsVisit(n, state, callback);
      }
    }

    state[u] = State.searched;
  }

  DFS() {
    var state = _initState();
    var d = {}, f = {}, p = {};

    for (var v in _vertices) {
      if (state[v] == State.unvisited) {
        _DFSVisit(v, state, d, f, p);
      }
    }

    return {
      'distances': d,
      'predecessors': p,
      'finished': f,
    };
  }

  _DFSVisit(u, Map<dynamic, State> state, Map d, Map f, Map p) {
    state[u] = State.visited;
    d[u] = ++time;
    var neighbors = _adjList[u];

    for (var n in neighbors) {
      if (state[n] == State.unvisited) {
        p[n] = u;
        _DFSVisit(n, state, d, f, p);
      }
    }

    state[u] = State.searched;
    f[u] = ++time;
  }
}

// DFS를 이용해서 DAG(Directed Acyclic Graph)의 위상정렬 구하는 함수
// DAG = 방향성있고 사이클이업는 그래프
// 위상정렬 = 먼저해야하는 순으로 정렬(시간값이 큰 순서에서 작은 순서로)
class DAG extends Graph {
  @override
  void addEdge(v, w) {
    _adjList[v].add(w);
  }

  List topoligicalSort() {
    var finished = DFS()['finished'];
    var list = [];

    for (var key in finished.keys) {
      list.add({
        'key': key,
        'value': finished[key],
      });
    }

    list.sort((a, b) => b['value'] - a['value']);

    return list.map((e) => e['key']).toList();
  }
}

enum State { unvisited, visited, searched }
