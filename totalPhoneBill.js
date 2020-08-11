module.exports = function totalPhoneBill(bills){
  console.log(bills)
    var totalBill = 0;
  var splitBills = bills.split(',');
   console.log(splitBills)
   for(var i=0; i<splitBills.length; i++)
    {
    var trimBills = splitBills[i].trim();
    if(trimBills.startsWith('call')){
     totalBill += 2.75 
    }
    else if(trimBills.startsWith('sms')){
      totalBill += 0.65
      }
    }
    return "R" + totalBill.toFixed(2);
      
  }