/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop}; //

function sumTo(n){

    if(n==0){
        return n
    } else {
    return n+sumTo(n-1);


}
}
function factorial(n){
    if(n==1){
        return n;
    }else {
        return n*factorial(n-1);
    }
}
function fibonacci(n){
    if(n==0){
        return 0;
    }else{
        return n+fibonacci(n-1);
    }
}

function outputList(arr){
    let count=0;
    if(arr==count){
        return
    }
    else{
        console.log(arr[count]);
        count++
        outputList(arr);
    }
}
let arr=[1,2,3,4,5];
function outputList(arr,count ){
  if((arr.length==0)||(count==arr.length)){
      return
  }
else{
    console.log(arr[count]);
    ++count;
    return outputList(arr,count )

}

  }
  function outputListloop(arr,count){
      let newarr=[];
      count=0;
    for(let vla of arr){
        newarr[count]=value;
        count++
    }
    return newarr;
  }
  function reverseList(arr,count ){
    let newarr=[];

   if((arr.length==0)||(count==arr.length)){
       return newarr;
   }else{
        newarr.push(arr[count]);
          count++;
          reverseList(arr,count );
   }

   }
   console.log(reverseList(arr,count ));



//////////////part two////////////////////////
let node3 = { 
    name: "p", 
    value: "This is text in the a paragraph", 
    children: null 
}; 
 
let node4 = { 
    name: "label", 
    value: "Name",  
    children: null 
}; 
 
let node5 = { 
    name: "input", 
    value: "this was typed by a user", 
    children: null 
}; 
 
let node2 = { 
    name: "div", 
    value: null, 
    children: [node4, node5] 
}; 
 
let node1 = { 
    name: "body", 
    children:  [node2, node3], 
    value: null, 
}

let LinkedList=function(){
    let head=null;
    let length=0;

    this.add=function(n){
        if(head==null){
            head=n;
        }
        else{
            current=head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=n;
        }
        return n;
    }


}
 list= new LinkedList();
 list.add(node3);
 list.add(node4);
 list.add(node5);
 list.add(node2);
 list.add(node1);


 function allnode(n){
     head=current;
     if(current==null){
         return null
     }else{
       console.log(current);
        return curent=current.next;
     }
 }
 console.log(allnode(list.name));
