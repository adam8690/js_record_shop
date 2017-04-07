var Record = require('../record')
var assert = require('assert')

describe('record', function(){
  it('should have an artist', function(){
    var record = new Record("David Bowie", "China Girl", "Rock", 300)
    assert.strictEqual("David Bowie", record.artist)
  })
    it('should have title', function(){
    var record = new Record("David Bowie", "China Girl", "Rock", 300)
    assert.strictEqual("China Girl", record.title)
  })
    it('should have a genre', function(){
    var record = new Record("David Bowie", "China Girl", "Rock", 300)
    assert.strictEqual("Rock", record.genre)
  })
    it('should have a price', function(){
    var record = new Record("David Bowie", "China Girl", "Rock", 300)
    assert.strictEqual(300, record.price)
  })

    
})