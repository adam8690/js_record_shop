var Record = require('./record')

var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.inventory = new Map();
  this.balance = 0
}

RecordStore.prototype = {
  addRecord: function(record){
    if(this.inventory.has(record)){
      var qty = this.inventory.get(record);
      this.inventory.set(record, qty + 1);
    }
    else {this.inventory.set(record, 1)}
  },
  printInventory: function(){
    console.log('keys', this.inventory.keys(0))
    print = ""
    for (var key of this.inventory){
      console.log(key[0].artist);
      print = print + key[0].title + ", " + key[0].artist + ": " + key[1]
    }
    return print;
  },
}

module.exports = RecordStore