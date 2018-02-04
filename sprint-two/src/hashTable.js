var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//time complexity: 0(n);
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
  }
  var found = false;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
      found  = true;
    }
  }
  if (!found) {
    this._storage[index].push([k, v]);
  }
};

//time complexity: 0(n);
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

//time complexity: 0(n);
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */


