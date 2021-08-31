function computeSalesCommission(commistin,salaried){
    if(salaried==true){
        if(commistin<300){
            return "no comisstin"
        }else if((commistin>=300)&&(commistin<500)){
            return commistin*1/100;
        }
        else{
            return 2/100*commistin;
        }
  }else if(commistin<300){
      return "no comisstin";
  }
        else if((commistin>300)&&(commistin<500)){
          return 2/100*commistin;
        }
        else{
         return 3/100*commistin;
        }
        }
        console.log(computeSalesCommission(650,false));
      
    while(true){
        let age=prompt("insert gae");
        if(age>18){
            break;
        }
    }
    console.log(age);
  
   for(let i = 1; i<=5; i++){
     for(let j = 1; j<=5; j++){
      document.write(j);
     }
     document.write("<br>");
     
   }
  
  for(let i = 1; i<=5; i++){
  for(let j = 1; j<=i; j++){
    console.log(i)
  }
  
  }
  
  for(let i=5;i>=1;i--){
      for(let j=1;j<=i;j++){
          document.write(i);
      }
      document.write("<br>");
  }
  function calculatesDownPayment(cost){
      if((cost>0)&&(cost<50000)){
          return 5/100*cost;
      }
      else if((cost<=50000)&&(cost>100000)){
     return 1000+10/100*(cost-50000)
      }else if((cost>=100000)&&(cost<200000)){
          return 2000+15/100*(cost-100000)
      }else if(cost>=200000){
          5000+10/100*(cost-200000);
      }
      else{
         return  "not valid amount";
      }
      }
  
  
      console.log(calculatesDownPayment(-10));
  
  function countD(num){
  let sum = 0;
  
  while(true){
      let x = num%10;
      sum = sum +x;
      num =  Math.floor(num / 10)
      if(num<10){
     break;
      }
  }
  sum = sum + num;
  
  return sum ;
  }
  console.log(countD(123))
  console.log(1/0);
  
  function sun(n,w){
      return n+w;
  }
  console.log(sun())
  let x="isprime";
  function testprimr(num){
      for(let i=2;i<num-1;i++){
          if(num%i==0){
              x="notprime";
          }
      }
    return x;
  }
  console.log(testprimr(5))