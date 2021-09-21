// let company = { 
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],  //subdepartments
//     internals: [{name: 'Jack', salary: 1300}]
//     }
//     };
//     function sumOfSallery(abc){
//         if(Array.isArray(abc)){
//             return abc.reduce((persion)=>persion.salary,0);
//         }else{
//             sum=0;
//             for(let sub  of Object.values(abc)){
//            sum+=sumOfSallery(sub.salary);
//             }
        
//         return sum;
//         }
//     }
//     console.log(sumOfSallery(company));


// = 'John';
//     return function() {
//     console(name);
//     };
//     }
//     let name = "Pete";
//     // create a function
//     let work = makeWorker();
//     // call it
//     work();

// "use strict";

// const square1 = {side: 5,  area: area};
// function area(){
//     console.log(this);  
//     return this.side * this.side;
//     }
// console.log(square1.area());  

// let john = { name: "john", surname: "smith", age: 20 };
// let pete = { name: "pete", surname: "hunt", age: 20 };
 
// let people = [john, pete];
// let fun=people.map((user,key)=>{
// fyllname:'${name}${user.surmane}',age:${userage}
// id:{idx+1}
// });
// 
//anima__ptoto__RABITE
// "use strict";
// let anmila={
//     eats:true,
// }
// let rabit={name:"with anmai"};
// rabit__prot__anamls;
// console,log(rabit.eats)

function User(firstname, lastname, birthDate) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
    }
    let user1 = new User('John', 'Smith', new Date('2000-10-01'));
    let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
    function getFullName() { return this.firstname + ' ' + this.lastname;}
    function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}