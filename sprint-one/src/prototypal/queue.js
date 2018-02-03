var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance._first = 0;
  someInstance._last = 0;
  someInstance._storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._last++] = value;
};

queueMethods.dequeue = function() {
  if (this._last > this._first) {
    var result = this._storage[this._first];
    delete this._storage[this._first++];
    return result;
  }
};

queueMethods.size = function() {
  return this._last - this._first;
};


