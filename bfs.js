// Implementation class for BFS

var searcher = {
  source: -1,
  target: -1,
  q: [],
  done: false,
  init: function(graph, source, target) {
    this.source = source;
    this.target = target;

    getNode(graph, source).type = SOURCE;
    getNode(graph, target).type = TARGET;

    this.q.unshift(source);
  },
  step: function(graph) {
    q = this.q;
    if(this.done || q.length == 0) return true;
    x = getNode(graph, q.pop());
    if(!x.visited) {
      markVisited(x);

      adjEdges = getAdjEdges(graph, x);
      adjEdges.forEach((edge) => {
        if(!edge.visited) {
          markVisited(edge.target);
          if(edge === getNode(graph, this.target)) {
            done = true;
            return true;
          }
        }
      });
    }
    return false;
  }
}
