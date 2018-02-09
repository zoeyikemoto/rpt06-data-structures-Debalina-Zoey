var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._length = 0;
  return set;
};

var setPrototype = {};

// time complexity: O(11)
setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
    this._length++;
  }
};

// time complexity: O(1)
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

// time complexity: O(1)
setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
    this._length--;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */
