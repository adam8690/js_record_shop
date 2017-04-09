var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.inventory = {}
  this.balance = 0
}

RecordStore.prototype = {
  addRecord: function(record){
    if(this.inventory[record]){
      var qty = this.inventory[record];
      this.inventory[record] = qty + 1
    }
    else this.inventory[record] = 1
  },
  printInventory: function(){
    for (var item in this.inventory){
      return item.title + ', ' + item.artist + ': ' + this.inventory[item]
    }
  }
}

module.exports = RecordStore