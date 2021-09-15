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
console.log(fibonacci(30));
