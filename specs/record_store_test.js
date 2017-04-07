var RecordStore = require('../record_store')
var Record = require('../record')
var assert = require('assert')

describe('record store', function(){

  recordStore = new RecordStore("1up", "Aberdeen");
  record1 = new Record("David Bowie", "China Girl", "Rock", 300)

  it('should have a name', function(){
    assert.strictEqual('1up', recordStore.name)
    })  

  it('should have a city', function(){
    assert.strictEqual('Aberdeen', recordStore.city)
    })  

  it('should start with an empty inventory', function(){
    assert.deepEqual([], recordStore.inventory)
    })
  it('should start with zero balance', function(){
    assert.deepEqual(0, recordStore.balance)
    })

  it('should be able to add records to store inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record1);
    assert.deepEqual([record1, record1], recordStore.inventory)
  })

})