describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should have a method to return the minimum value', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.getMinValue()).to.equal(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.getMinValue()).to.equal(1);
  });

  it('should have a method to return the closest value', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    expect(binarySearchTree.findClosest(7)).to.equal(8);
    expect(binarySearchTree.findClosest(1)).to.equal(2);
    expect(binarySearchTree.findClosest(30)).to.equal(8);
  });

  it('should produce same result when searching array', function() {
    var array = [5, 2, 3, 8]
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    var getClosestArray = function(array, value) {
      var difference;
      var result;
      array.forEach(function(item) {
        if (!difference || difference > Math.abs(item - value)) {
          difference = Math.abs(item - value);
          result = item;
        }
      });
      return result;
    }
    expect(getClosestArray(array, 7)).to.equal(8);
    expect(getClosestArray(array, 1)).to.equal(2);
    expect(getClosestArray(array, 30)).to.equal(8);
  });

});
