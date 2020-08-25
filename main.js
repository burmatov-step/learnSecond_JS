"use strict";

function saleSum(sumAll, products, promo ) {
  let sale = 0;
  let sumEnd;
  if(products >= 5 && products < 10){
    sale += sumAll*0.05
  } else if(products >= 10){
    sale += sumAll*0.1
  }

  if(sumAll > 100000){
    sale += (sumAll - 100000)*0.2
  }

  if(promo === '15' && sumAll > 25000){
    sale += sumAll*0.15
  }

  if(promo === '100' && sumAll > 100){
    sale += 100
  } else if(promo === '100' && sumAll <= 100){
    sumEnd = 0;
    return sumEnd;
  }


  if(sale === 0){
    return
  } else{
    sumEnd = sumAll - sale;
    return sumEnd;
  }

}


console.log(saleSum(150000, 10, '100'));

