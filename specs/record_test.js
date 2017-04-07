var Record = require('../record')
var assert = require('assert')

describe('record', function(){

  var record = new Record("David Bowie", "China Girl", "Rock", 300)
  
  it('should have an artist', function(){
    assert.strictEqual("David Bowie", record.artist)
  })
    it('should have title', function(){
    assert.strictEqual("China Girl", record.title)
  })
    it('should have a genre', function(){
    assert.strictEqual("Rock", record.genre)
  })
    it('should have a price', function(){
    assert.strictEqual(300, record.price)
  })
    it("should be able to print the record's properties as a string", function(){
      assert.strictEqual('China Girl, recorded by David Bowie, genre is Rock. Price: £3.00', record.printDetails())
    })


})