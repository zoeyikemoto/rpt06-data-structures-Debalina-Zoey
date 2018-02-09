var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._currentLength = 0;
};

//time complexity: 0(n);
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  var found = false;
  bucket.forEach( function(item) {
    if (item[0] === k) {
      item[1] = v;
      found = true;
    }
  });
  if (!found) {
    bucket.push([k, v]);
    this._currentLength++;
  }
//  this.limitCheck();
};

//time complexity: 0(n);
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

//time complexity: 0(n);
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._currentLength++;
    //      this.limitCheck();
    }
  }
};

HashTable.prototype.limitCheck = function() {
  //if over 75%, double size
  //if under 25%, half size
  //console.log(this._currentLength);
  var resizeTable = false;
  var newLimit;
  if (this._currentLength >= (this._limit * 0.75)) {
    newLimit = this._limit * 2;
    resizeTable = true;
  }
  if (this._currentLength <= (this._limit * 0.25)) {
    newLimit = this._limit / 2;
    resizeTable = true;
  }

  if(resizeTable) {
    var newTable = new HashTable(newLimit);

    this._storage.each(function(bucket){
      if (!bucket) { return;}
      for(var i = 0; i < bucket.length; i++) {
        newTable.insert(bucket[i][0], bucket[i][1]);
      }
    });
  }



  //make a new temp hashtable
  //var newlimit;
  //var newTable = LimitedArray(newLimit);


  //current table: for each
  //var index = getIndexBelowMaxForKey(k, newTable._limit);

  //current table = newTable

// //  console.log("keys length: " + Object.keys(this._storage).length + " limit: " + this._limit + " new limit: " + (this._limit * 2));
//   if (this._storage.length >= (this._limit * 0.75)) {
//     this._storage.storage.length *= 2;
//     this._limit *= 2;
//   //  console.log(this._limit + " double");
//     // this._storage = LimitedArray(this._limit);
//   } else if (this._storage.length <= (this.limit * 0.25)) {
//     this._storage.storage.length /= 2;
//     this._limit /= 2;
//   //  console.log(this._limit + " half");
//     // this._storage = LimitedArray(this._limit);
//   }

};

/*
 * Complexity: What is the time complexity of the above functions?
 * see comment above each method
 */


