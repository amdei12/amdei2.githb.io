 
function perimeter(){ 
    console.log(this);   
    return 4 ;
} 
       const shape = {side: 5,  perimeter: perimeter}; 
       shape.perimeter();
       console.log("********************************");
       const myPerim =new shape; 
myPerim(); 