class Queue {
  final _items = [];

  void enqueue(dynamic element) {
    _items.add(element);
  }

  dynamic dequeue() {
    return _items.removeAt(0);
  }

  void front() {
    return _items[0];
  }

  bool isEmpty() {
    return _items.isEmpty;
  }

  void clear() {
    _items.clear();
  }

  int size() {
    return _items.length;
  }

  @override
  String toString() {
    return _items.toString();
  }
}
