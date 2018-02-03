class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, first, last) {
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this.storage[this.last++] = value;
  }

  dequeue() {
    if (this.last > this.first) {
      let result = this.storage[this.first];
      delete this.storage[this.first++];
      return result;
    }
  }

  size() {
    return this.last - this.first;
  }
}
