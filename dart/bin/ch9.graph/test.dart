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
      expect(graph.BFS(myVertices[0], null)['distances']['F'], 2);

      // you can see the shortest paths
      // for (var i = 1; i < myVertices.length; i++) {
      //   var start = myVertices[0];
      //   var path = [];
      //   var pred = graph.BFS(myVertices[0], null)['predecessors'];

      //   for (var vertex = myVertices[i];
      //       vertex != start;
      //       vertex = pred[vertex]) {
      //     path.add(vertex);
      //   }

      //   var s = '${myVertices[0]} -> ';
      //   while (path.isNotEmpty) {
      //     var pop = path.removeLast();
      //     s += path.isNotEmpty ? '$pop -> ' : pop;
      //   }
      //   print(s);
      // }
    });

    test('dfs :', () {});
  });
}
