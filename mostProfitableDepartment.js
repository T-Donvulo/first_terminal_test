module.exports = function mostProfitableDepartment(departments){
    //console.log(department)
    var dept = '';
    var sale = 0;
    for(var i=0; i<departments.length; i++){
    //console.log(departments[i].sales)
      if(departments[i].sales>sale){
      sale = departments[i].sales
        console.log(departments[i].sales);
        dept = departments[i].department
      } 
    }
    return dept
  }

  