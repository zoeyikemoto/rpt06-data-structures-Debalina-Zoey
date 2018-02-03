var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// time complexity: O(n)
setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

// time complexity: O(n)
setPrototype.contains = function(item) {
  for (i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

// time complexity: O(n)
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    var removed = this._storage.splice(this._storage.indexOf(item), 1);
    return removed;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */
