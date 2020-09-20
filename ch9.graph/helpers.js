bfs(v, callback) {
    let color = initializeColor(this);
    let queue = new Queue();
    let d = {};
    let pred = {};
    queue.enqueue(v);

    for (let ver of this.vertices) {
      d[ver] = 0;
      pred[ver] = null;
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);
      color[u] = "grey";

      for (let n of neighbors) {
        if (color[n] === "white") {
          color[n] = "grey";
          d[n] = d[u] + 1;
          pred[n] = u;
          queue.enqueue(n);
        }
      }
      color[u] = "black";
      if (callback) {
        callback(u);
      }
    }