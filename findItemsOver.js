module.exports = function findItemsOver(names, quantity){
    var higher = [];
    for(var i=0; i<names.length; i++){
      if (names[i].qty>quantity){
        higher.push(names[i])
      }
    }
    return higher
      
    }