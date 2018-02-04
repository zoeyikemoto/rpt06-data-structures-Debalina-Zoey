var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

//Time complexity: O(1);
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

//Time complexity: O(n);
treeMethods.contains = function(target, root) {
  root = root || this;
  if (root.value === target) {
    return true;
  }
  for (var i = 0; i < root.children.length; i++) {
    if (this.contains(target, root.children[i])) {
      return true;
    }
  }
  return false;
};

//Time complexity: O(n);
treeMethods.traverse = function(cb) {
  cb(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */
