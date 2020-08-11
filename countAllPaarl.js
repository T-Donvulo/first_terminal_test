module.exports = function countAllPaarl(register){
    var vehicle = [];
      var car = register.split(',');
      for(var i=0; i<car.length; i++){
        var trimReg = car[i].trim();
    if(trimReg.startsWith('CJ')){
    vehicle.push(trimReg) 
      }
     }  
    return vehicle.length;
    }