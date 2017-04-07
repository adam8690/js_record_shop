var Record = require('../record')
var assert = require('assert')

describe('record', function(){
  it('should have a name', function(){
    var record = new Record("David Bowie", "China Girl", "Rock", 300)
    assert.strictEqual("David Bowie", record.artist)
  })


})