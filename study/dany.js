// // function calcu() {
// //     a=`10
// //     b=20;`
// //     let sum=()=>this.a+this.b;
// //     let pro=()=>this.a*this.b;
    
// // } 
// // calcu =new calcu();
// // console.log(calcu.sum());
// // console.log(calcu.pro());

// function calcu() {
//     a=`10
//     b=20;`
//     let sum=()=>this.a+this.b;
//     let pro=()=>this.a*this.b;
    
// } 
let b=[5, 44, 1, 33]; 
let x=b.reduce(function(val){
    let a=b[0];
    a<val;a=val;
    return a;});
    console.log(x);
