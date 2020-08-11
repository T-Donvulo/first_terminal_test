module.exports = function countAllFromTown(car, origin){
    var town = [];
    var vehicle = car.split(',');
    for(var i=0; i<vehicle.length; i++)
    {
    var trimReg = vehicle[i].trim();
      
      if(trimReg.startsWith(origin)){
      town.push(trimReg); 
   }
    }
    console.log(town);
    
    return town.length;
  }