const tiger={name:"tiger",round:[4,4,3,5]}
const bryson={name:"bryson",round:[4,4,3,5]}
const paddraig={name:"paddraig",round:[4,4,3,5]};
const toranamin =[tiger,bryson,paddraig];


// function cacalScore(arr){
//     return arr.map(key=>sumof(key.round));
// }
// function sumof(arr1){
//     let sum=0;
//     for(let point of arr1){
//      sum+=point;
//     }
//     return sum;
// }
// console.log(cacalScore(toranamin));

// function calcName(arr){
//     return arr.map(key=>(key.name+" "+ sumof(key.round)));
// }
// function sumof(arr){
//     let sum=0;
//     for(let point of arr){
//         sum+=point;
//     }
//     return sum;
// }
//console.log(calcName(toranamin));
//  function reducescore(obj){
//      let arr=obj.round;
//      return arr.reduce((point,sum)=>sum+=point)
//  }
//  console.log(reducescore(tiger));

// function power(n,m){
    
//     if(m==0){
//         return 1;
//     }
//     if(m==1){
//         return n;

//     }else{
//         return n*power(n,m-1);

//     }

//     }
//     console.log(power(2,2));
// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 1600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };
//   function sumSalaries(department) {
//     if (Array.isArray(department)) { // case (1)
//       return department.reduce((value) => value.name); // sum the array
//     } else { // case (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep.name); // recursively call for subdepartments, sum the results
//       }
//       return department;
//     }
//   }
  
//   console.log(sumSalaries(company))

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  let arr=[];
  function abc(list,a){
      let i=0;
     a[i]=list.value;
     i++;
      if(list.next){
        abc(list.next);
      }
      for(let i=a.length-1;i>=0;i--){
          console.log (a[i]);
      }
  }
  console.group(abc(list,arr))