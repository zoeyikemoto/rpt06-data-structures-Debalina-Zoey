var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: O(1)
  list.addToTail = function(value) {
    var node = Node(value);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  };

  // Time complexity: O(1)
  list.addToHead = function(value) {
    var node = Node(value);

    if (this.head) {
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
  };

  // Time complexity: O(1)
  list.removeHead = function() {
    var node = this.head.value;
    this.head = this.head.next;
    return node;
  };

  // Time complexity: O(n)
  list.contains = function(target) {
    for (var currentNode = this.head; currentNode; currentNode = currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */
