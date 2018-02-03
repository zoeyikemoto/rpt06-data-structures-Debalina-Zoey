// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
//time complexity: 0(1);
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
//time complexity: 0(1);
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
//time complexity: 0(1);
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node]) {
    this.removeEdge(node, this.edges[node]);
    this.removeEdge(this.edges[node], node);
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//time complexity: 0(1);
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode] === toNode;
};

// Connects two nodes in a graph by adding an edge between them.
//time complexity: 0(1);
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = toNode;
  this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
//time complexity: 0(1);
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    delete this.edges[fromNode];
    delete this.edges[toNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
//time complexity: 0(n);
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */