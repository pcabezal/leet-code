
var MyHashSet = function() {

};


MyHashSet.prototype.add = function(key) {
    this[key] = true;
    
};


MyHashSet.prototype.remove = function(key) {
    delete this[key]
};


MyHashSet.prototype.contains = function(key) {
    return this.hasOwnProperty(key)
};

