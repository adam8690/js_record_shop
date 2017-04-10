var Record = function(artist, title, genre, price){
  this.artist = artist
  this.title = title
  this.genre = genre
  this.price = price
}

Record.prototype = {
  printDetails: function(){

    return this.title + ", recorded by " + this.artist + ", genre is " + this.genre + ". Price: £" + (this.price/100).toFixed(2)
  }
}

module.exports = Record