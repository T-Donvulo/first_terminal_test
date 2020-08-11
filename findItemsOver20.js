module.exports = function findItemsOver20(itemList){
  var higher = [];;
  for(var i=0; i<itemList.length; i++){
    if (itemList[i].qty>20){
      higher.push(itemList[i])
    }
  }

  return higher
  }
