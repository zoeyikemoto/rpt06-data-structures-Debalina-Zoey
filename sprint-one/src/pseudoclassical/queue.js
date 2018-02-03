var Queue = function() {
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.last > this.first) {
    var result = this.storage[this.first];
    delete this.storage[this.first++];
    return result;
  }
};

Queue.prototype.size = function() {
  return this.last - this.first;
};
