// let LinkedList=function(){
//     let head=null;
//     let length=0;

//     this.add=function(n){
//         if(head==null){
//             head=n;
//         }
//         else{
//             current=head;
//             while(current.next!=null){
//                 current=current.next;
//             }
//             current.next=n;
//         }
//         return n;
//     }


// }
//  list= new LinkedList();
//  list.add(node3);
//  list.add(node4);
//  list.add(node5);
//  list.add(node2);
//  list.add(node1);


//  function allnode(n){
//      head=current;
//      if(current==null){
//          return null
//      }else{
//        console.log(current);
//         return curent=current.next;
//      }
//  }
//  console.log(allnode(list.name));

// let A=[1,2,3,4,5];
// b=[...A]
// console.log(b);
// copyofA=C;
// console.log(C);
 
function sumOfSquares(num,i,sum){
  
    if(sum>=num){
        return  sum
    }else{
        return  (sum+i*i)+sumOfSquares(num,i+1);

      
         
        
    }
}
console.log(sumOfSquares(14,1,0));