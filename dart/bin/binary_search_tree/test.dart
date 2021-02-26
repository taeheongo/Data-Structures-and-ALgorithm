import 'dart:math';

import "binary_search_tree.dart";
import 'package:test/test.dart';

void testBinarySearchTree() {
  group('binarySearchTree:', () {
    var binarySearchTree = BinarySearchTree();

    binarySearchTree
      ..insert(11)
      ..insert(7)
      ..insert(15)
      ..insert(5)
      ..insert(6)
      ..insert(3)
      ..insert(9)
      ..insert(8)
      ..insert(10)
      ..insert(13)
      ..insert(12)
      ..insert(14)
      ..insert(20)
      ..insert(18)
      ..insert(25);

    //                    11
    //             7              13
    //          5     9       12      14
    //        3   6 8   10                 20
    //                                  18    25

    // binarySearchTree test
    test('11의 right의 right의 right는 25', () {
      expect(binarySearchTree.root.right.right.right.key, 25);
    });

    // in-order travsere test
    test('in-order traverse :', () {
      var result = '';

      void callback(key) {
        print(key);
        result += '$key->';
      }

      binarySearchTree.inOrderTraverse(callback);

      expect(result, '3->5->6->7->8->9->10->11->12->13->14->15->18->20->25->');
    });

    // pre-order traverse test
    test('pre-order traverse :', () {
      var result = '';

      void callback(key) {
        result += '$key->';
      }

      binarySearchTree.preOrderTraverse(callback);
      expect(result, '11->7->5->3->6->9->8->10->15->13->12->14->20->18->25->');
    });

    // post-order traverse test
    test('post-order traverse :', () {
      var result = '';

      void callback(key) {
        result += '$key->';
      }

      binarySearchTree.postOrderTraverse(callback);
      expect(result, '3->6->5->8->10->9->7->12->14->13->18->25->20->15->11->');
    });

    test('min은 3 ', () {
      expect(binarySearchTree.min().key, 3);
    });

    test('max은 25 ', () {
      expect(binarySearchTree.max().key, 25);
    });

    test('18은 존재하고 23은 존재하지 않는다. ', () {
      expect(binarySearchTree.search(18).key, 18);
      expect(binarySearchTree.search(23), null);
    });

    test('2, 14, 19 삭제: ', () {
      binarySearchTree = BinarySearchTree();

      binarySearchTree
        ..insert(11)
        ..insert(7)
        ..insert(15)
        ..insert(5)
        ..insert(6)
        ..insert(3)
        ..insert(9)
        ..insert(8)
        ..insert(10)
        ..insert(13)
        ..insert(12)
        ..insert(14)
        ..insert(20)
        ..insert(18)
        ..insert(25)
        ..insert(2)
        ..insert(19);

      //                    11
      //             7              13
      //          5     9       12      14
      //        3   6 8   10                 20
      //     2                            18    25
      //                                     19
      binarySearchTree.inOrderTraverse((key) => print(key));

      expect(binarySearchTree.remove(2), true);
      expect(binarySearchTree.search(2), null);
      expect(binarySearchTree.remove(19), true);
      expect(binarySearchTree.search(19), null);
      expect(binarySearchTree.remove(14), true);
      expect(binarySearchTree.search(14), null);
      binarySearchTree.inOrderTraverse((key) => print(key));
    });
  });
}

void main() {
  testBinarySearchTree();
}
