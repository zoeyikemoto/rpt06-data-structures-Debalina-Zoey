var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance._storage = {};
  someInstance._count = 0;
  
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._count++] = value;
};

stackMethods.pop = function() {
  if (this._count) {
    var result = this._storage[--this._count];
    delete this._storage[this._count];
    return result;
  }
};

stackMethods.size = function() {
  return this._count;
};



