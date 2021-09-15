
// const player1={name:"bob",points:[1,2,1]};
// const player2={name:"andre",points:[2,0,1]};
// const player3={name:"max",points:[1,1,1]};
// const player=[player1,player2,player3];
// function findaverg(arr){
//     let res=[];
//     for(let key of arr){
//         let sum=aveend(key.points);
//   res[key.name]=sum;
//     }
//     return res;
// }
// function aveend(arrpoint){
//     let ava=0;
//     for(let val of arrpoint){
//         ava+=val;

//     }
//     return ava/arrpoint.length;
// }
// console.log(findaverg(player));
///////////////////////////////////////////////////////////////

    // let arr123=[1,2,3];
    // let y= arr123.map((val)=>val*val);
    // console.log(y);
    // /////////////////////////////////////////////////////////////
    // function ask(question,yes,no){
    //     if("do yo agree"){
        //     yes();
        // }
        // else{
        //     no();
        // }

    // }
    // function ShowOk(){
    //     console.log("you agree")
        
    // }
    // function showCancle(){
    //     console.log("you cancel the exam")
        
    // }
    // console.log(ask("do you agree?",ShowOk(),showCancle()));
    ///////////////////////////////////////////////////////////////////////////////
    // ()=>console.log("you agree"),
    // ()=>console.log("you cancel the exam")
    // function  excuter(fun,a,b){
    //  this.setValu=function(a,b) {
    //      this.a=a;
    //      this.b=b;
         
    //  }
    //  this.add=function () {
    //      return this.a+this.b;
         
    //  }
    //  this.mut=function nut() {
    //      return this.a*this.b;
         
    //  }
        
    // }
    // excuter.setValu(4,5);
    // console.log(excuter(add,a,b));
    //////////////////////////////////////////////////////////////
    // let Calculater={
    //     a:0,
    //     b:0,
    //     setVlue(a,b){
    //         this.a=a;
    //         this.b=b;
    //     },
    //     add(){
    //         return this.a+this.b;
    //     },
    //     Mut(){
    //         return this.a+this.b;
    //     }


    // }
    
    // Calculater.setVlue(2,4)
    // console.log(Calculater.add());
    // calc=new calculatoer();
    // function calculatoer(params) {
    //     a=0,
    //     b=0,
    //     this.setValu=function (a,b) {
    
    //         this.a=a;
    //         this.b=b;
    //     },

        
    //     this.add=function (){
    //       return this.a+this.b;
    //     },
    //     this.mut-function() {
    //         return a*b;
    //     }

    // }
    
    // calc.setValu(2,4);
    // console.log(calc.add(2,4));
        //////////////////////////////////////////////////////
    //     const number=[1,5,18,77,108];
    //   let x=number.filter(key=>key%2==0?key:null);
    //   console.log(x);
    //   z=number.find(val=>val%2==0)
    //   console.log(z);
    //   console.log(number.indexOf(a=>a%2==

    // let x="daniel is a studemt at miu"
    // let m=x.split(" ");
    // let arr=[];
    // let i;
    //  let k=arr[i]
    //  let j=arr[i+1];
    //  function comper(a,b ){
    //   return +(a.length,b.length);
    //  }
    //  let z=y.sort(comper);
    //  console.log(y);

//      let arr=[{name:"ram",age:29},{name:"syam",age:40},{name:"ganga",age:19}]
//            function aveAge(arr){
//                let ava=0;
//                 for(let key of arr){
//                      ava+=key.age;
//                      }
//                let x= ava/arr.length;
//                let num=x.toFixed(2);
//                return num;
            
//             }
//           console.log(aveAge(arr));
//   function comer(arr) {
//       return (arr.age-arr.age).join(arr);
      
//   }
//   let m=arr.sort(comer).findfirst();

    
// let a=[1,2,3,4,5];
// function mymap(b,add10) {
//     let an=[];
//     for(let i=0;i<b.length;i++){
//      let x=add10(b[i]);
//     an[i]=x;
//     }
//     return an;
// }
// let add10=function(i){
//     return 10*i;
// }
// console.log(mymap(a,add10));
// let der="this is the class we take javaScript";
// let tekel=der.split(" ");
// console.log(tekel);
// let dan=tekel.sort();
// let erc=dan.join();
// console.log(erc);

// dan=tekel.sort();
// console.log(dan);
// a=["erec","tedany","choms"]
// let r=a.map(function(item,index,a){
//     return item.length;
// });
// console.log(r)
// function destinect(arr1){
//     let arr=[];
//     arr1.sort();
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]!=arr1[i+1])
//         arr.push(arr[i]);
//     }
// }
// let b=[1,2,1,7,4,5,19,0,3]
// console.log(destinect(b))
// let z=+33+10+"";
// console.log(z);
// const a={x:5};
// a.x=6;
// console.log(a.x);
// const b={x:4};
// console.log(a);
// function area(){
//     console.log(this);
//     return 3.14*this.r*this.r;
// }
// let circle={
//     r:1,
//     area:area,

// }
// console.log(circle.area());
// let a=[1,2,3,4,5,6];
// let y=a.reduce((val,sum)=>sum+=val,0);
// console.log(y);
// let z=a.reduce((val,mut)=>mut=mut*val,1);
// console.log(z);
// const numbers = {
//     one: 1,
//     two: 22,
//     three: 333,
//     four: 444
//     }

//     const properties = ["one", "two", "three", "four"];
//     let x=properties[1]
//     for(let i=0;i<properties.length;i++){
//         console.log(numbers.properties[i]);
//     for(let i=0;i<properties.length;i++){

//     }
//     console.log(numbers.x);

// const player1={name:"bob",points:[1,2,1]};
// const player2={name:"andre",points:[2,0,1]};
// const player3={name:"max",points:[1,1,1]};
// const player=[player1,player2,player3];
// function getava(arr){
//     let newarr=[];
//     for(let val of arr){
//         newarr[val.name]=averag(val.points);
        
//     }
//     return newarr;

// }
// function averag(arr1){
//     let sum=0
//     let ave=0;
//     for(let key of arr1){
//         sum+=key;
//     }
//     ave=sum/arr1.length;
//     return ave.toFixed(2);
// }
// console.log(getava(player));
// const arry123=[1,2,3];
// let x=arry123.map(key=>(key*key));
// console.log(x);
// function ask(question,yes,no){
//     if( "do you agree?"){
//         yes();
//     }
//     no();
// }
// function showok(){
//     console.log("i am agree");
// }
// function cancel(){
//     console.log("disgree");
// }
// console.log(ask("do you agree",showok,cancel))
// function excuter(func,a,b){
//     return func(a,b)
// }
// function add(a,b){
//     return a+b;
// }
// console.log(excuter(add,5,5));
// let calc={
//    a:0,
//    b:0,
//    setValu(a,b){
//        this.a=a;
//        this.b=b;
//    },
//     add(){
//      return this.a+this.b;
//    }

// }
// this.setValu(5,5);
// console.log(calc.add())
// function calacuater(params) {
//     a=0;
//     b=0;
//     this.setValu=function(a,b) {
//         this.a=a;
//         this.b=0;

//     }
//     this.sum=function () {
//         return this.a+this.b;
        
//     }
    
// }
// cac=new calacuater();
// cac.setValu(20,40);
// console.log(cac.sum());
// let a=[1,5,18,2,77,108]
//   x=a.filter(val=>val%2==0?val:null);
//   console.log(x);
//   let y=a.find(val=>val%2==0?val:null)
//   console.log(y);
//   let z=a.indexOf(val=>val%2===0)
//   console.log(z);
function word(a,b){
    return a.length-b.length;

}
let dan=["daney","ercc","mylove"];
let z=dan.sort(word);
console.log(z);
let s=dan.map((valu,indes,dan)=>valu.length);
console.log(s);