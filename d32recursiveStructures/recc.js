let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  function findsum(derpartimint){
      let sum=0;
      if(Array.isArray(derpartimint)){
     return derpartimint.reduce((pre,curr)=>pre+=curr)
      }else{
          sum=0;
          for (let subdep of Object.values(derpartimint)) {
              sum+=findsum(subdep)
              
      }
      
    }
    return sum;
}