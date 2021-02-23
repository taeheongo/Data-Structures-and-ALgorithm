import '../ch4.queue/queue.dart';

typedef Callback = void Function(dynamic value);

class Graph {
  final _vertices = [];
  final _adjList = {};
  int _time = 0;

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
    final state = <dynamic, State>{};

    for (var v in _vertices) {
      state[v] = State.unvisited;
    }

    return state;
  }

  bfs(v, Callback callback) {
    var queue = Queue();
    queue.enqueue(v);
    var state = _initState();

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      state[u] = State.visited;
      var neighbors = _adjList[u];

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

  Map<String, Map> BFS(v, Callback callback) {
    var queue = Queue();
    queue.enqueue(v);
    var state = _initState();
    var d = {}; // distance from v
    var pred = {};

    for (var vert in _vertices) {
      d[vert] = 0;
      pred[vert] = null;
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      state[u] = State.visited;
      var neighbors = _adjList[u];

      for (var n in neighbors) {
        if (state[n] == State.unvisited) {
          state[n] = State.visited;
          queue.enqueue(n);
          d[n] = d[u] + 1;
          pred[n] = u;
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

  void _dfsVisit(v, Map<dynamic, State> state, Callback callback) {
    state[v] = State.visited;
    var neighbors = _adjList[v];
    if (callback != null) {
      callback(v);
    }

    for (var n in neighbors) {
      if (state[n] == State.unvisited) {
        _dfsVisit(n, state, callback);
      }
    }

    state[v] = State.searched;
  }

  Map<String, Map> DFS() {
    var f = {}, d = {}, p = {};
    var state = _initState();
    _time = 0; // initiate time 0;

    for (var v in _vertices) {
      d[v] = 0;
    }

    for (var v in _vertices) {
      if (state[v] == State.unvisited) {
        _DFSVisit(v, state, f, d, p);
      }
    }

    return {
      'distances': d,
      'predecessors': p,
      'finished': f,
    };
  }

  void _DFSVisit(v, state, Map f, Map d, Map p) {
    state[v] = State.visited;
    var neighbors = _adjList[v];
    _time++;

    for (var n in neighbors) {
      if (state[n] == State.unvisited) {
        p[n] = v;
        d[n] = d[v] + 1;
        _DFSVisit(n, state, f, d, p);
      }
    }

    state[v] = State.searched;
    f[v] = ++_time;
  }
}

class DAG extends Graph {
  @override
  void addEdge(v, w) {
    _adjList[v].add(w);
  }

  // DFS를 이용해서 DAG(Directed Acyclic Graph)의 위상정렬 구하는 함수
  // DAG = 방향성있고 사이클이업는 그래프
  // 위상정렬 = 먼저해야하는 순으로 정렬(시간값이 큰 순서에서 작은 순서로)
  List topoligicalSort() {
    var finished = DFS()['finished'];
    var list = [];

    for (var key in finished.keys) {
      print(key);
      list.add({'key': key, 'value': finished[key]});
    }

    list.sort((a, b) => b['value'] - a['value']);

    return list.map((e) => e['key']).toList();
  }
}

enum State { visited, unvisited, searched }
