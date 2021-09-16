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
 console.log(allnode(list));
