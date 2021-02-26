import 'package:test/test.dart';

import 'graph.dart';

void main() {
  var graph = Graph();
  var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  for (var v in myVertices) {
    graph.addVertex(v);
  }
  graph
    ..addEdge('A', 'B')
    ..addEdge('A', 'C')
    ..addEdge('A', 'D')
    ..addEdge('C', 'D')
    ..addEdge('C', 'G')
    ..addEdge('D', 'G')
    ..addEdge('D', 'H')
    ..addEdge('B', 'E')
    ..addEdge('B', 'F')
    ..addEdge('E', 'I');

  group('graph', () {
    test('Graph class : ', () {
      expect(
        graph.toString(),
        'A -> B C D \n' +
            'B -> A E F \n' +
            'C -> A D G \n' +
            'D -> A C G H \n' +
            'E -> B I \n' +
            'F -> B \n' +
            'G -> C D \n' +
            'H -> D \n' +
            'I -> E \n',
      );
    });

    test('bfs :', () {
      graph.bfs(myVertices[0], (value) => print(value));
    });

    test('the shortest length from A to F is 2', () {
      print(graph.BFS(myVertices[0], null));
      expect(graph.BFS(myVertices[0], null)['distances']['F'], 2);

      // you can see the shortest paths

      for (var v in myVertices) {
        if (v == myVertices[0]) {
          continue;
        }

        var pred = graph.BFS(myVertices[0], null)['predecessors'];

        var s = '';
        for (var vert = v; vert != myVertices[0]; vert = pred[vert]) {
          s = '-> $vert' + s;
        }

        s = '${myVertices[0]}' + s;
        print(s);
      }
    });

    test('dfs :', () {
      graph.dfs((value) => print(value));
    });

    test('DFS : the finished time of I is 5', () {
      print(graph.DFS());
      expect(graph.DFS()['finished']['I'], 5);
    });

    test('DAG :', () {
      var dag = DAG();
      var myVerties2 = ['A', 'B', 'C', 'D', 'E', 'F'];

      for (var v in myVerties2) {
        dag.addVertex(v);
      }
      dag.addEdge("A", "C");
      dag.addEdge("A", "D");
      dag.addEdge("B", "D");
      dag.addEdge("B", "E");
      dag.addEdge("C", "F");
      dag.addEdge("F", "E");

      expect(dag.topoligicalSort(), ['B', 'A', 'D', 'C', 'F', 'E']);
    });
  });
}
