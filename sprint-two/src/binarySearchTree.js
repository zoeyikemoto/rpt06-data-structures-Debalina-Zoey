var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  return newTree;
};

// time complexity: O(log n)
BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

// time complexity: O(log n)
BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }

  if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

// time complexity: O(log n)
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

// time complexity: 0(n)
BinarySearchTree.prototype.getMinValue = function() {
  if(!this.left) {
    return this.value;
  } else {
    return this.left.getMinValue();
  }
};

BinarySearchTree.prototype.findClosest = function(value) {
  var difference;
  var result;
  if (value === this.value) {
    return this.value;
  }
  if (!difference || difference > Math.abs(this.value - value)) {
    difference = Math.abs(this.value - value);
    result = this.value;
  }
  if (value < this.value) {
    if (this.left) {
      return this.left.findClosest(value);
    }
  }
  if (value > this.value) {
    if (this.right) {
      return this.right.findClosest(value);
    }
  }
  return result;
}

/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */
