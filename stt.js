"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
*/

const bank = {
    transactionsDB: [],
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


bank.saveTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(amount);

};

bank.debit = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);

    if(custome.getBalance>amount){
    return custome.getBalance-amount;
    }
    else{
        return "can not make";
    }
    
};

bank.credit = function (id, amount) {
    const balance = this.getBalance(id);
    balance.balance += amount;
    this.saveTransaction(id, amount);
}


bank.getBalance = function (id) {
    let i=0;
    let balnce
    for(let a of bank.transactionsDB){
        if(id==a.id){
            for(let i=0;i<a.customerTransactions;i++){
        blance+=a.customerTransactions[i];
    
            }
            
        

    }
    return balnce;
};




/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function () {
    bankblance=0;
 for(let a in bank.transactionsDB){
     for(let key  in a){
         for(let i=0;i<key.length;i++){
            bankblance+=key[i];
         }
     }
 }
 
};
return bankbalance;
}
console.log("total balance should be 85: ", bank.bankBalance);

console.log("total should now be 105: ", bank.bankBalanc);

