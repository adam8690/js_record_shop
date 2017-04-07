var RecordStore = require('../record_store')
var assert = require('assert')

describe('record store', function(){
  it('should have a name', function(){
    recordStore = new RecordStore("1up", "Aberdeen");
    assert.strictEqual('1up', recordStore.name)
    })  

  it('should have a city', function(){
    recordStore = new RecordStore("1up", "Aberdeen");
    assert.strictEqual('Aberdeen', recordStore.city)
    })  

  it('should start with an empty inventory', function(){
    recordStore = new RecordStore("1up", "Aberdeen");
    assert.deepEqual([], recordStore.inventory)
    })
})