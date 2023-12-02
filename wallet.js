
let balamce = document.querySelector("#balance");
let deposit = document.querySelector("#deposit");
let withdraw  = document.querySelector("#withdraw");
let history = document.querySelector("#history")
let total= 0 ;


let data = [] ; 

function updateHistory() {
    const newData = data
      .reverse()
      .map(function (item, index, list) {
        const transactionClass = item > 0 ? "deposit" : "withdraw";
        const transactionAmount = item > 0 ? `+$${item.toFixed(2)}` : `-$${Math.abs(item).toFixed(2)}`;

  
        return `<p class="txn-list ${transactionClass}">${transactionClass.charAt(0).toUpperCase() + transactionClass.slice(1)} <span class="txn-amount">${transactionAmount}</span></p>`;

      })
      .join("");
  
    history.innerHTML = newData;
  }

deposit.addEventListener("click" , function() {   

    let deposit_amount = prompt("Enter the amount to add:") 
  
    if(deposit_amount > 0 && deposit_amount !== null && deposit_amount !== ""){ 
        deposit_amount = parseFloat(deposit_amount); 

        if(deposit_amount > 0){   
            total+=deposit_amount;
 
            balance.innerHTML = "$" + total.toFixed(2);
    
            data.push(deposit_amount);
            updateHistory();
        }else { 
            alert("Invalid cash-in amount. Amount must be greater than 0.")
        }    
    } else {
        alert ("Invalid input or operation canceled.")
    }

});


withdraw.addEventListener("click",function(){   
    let withdraw_amount = prompt("Enter the amount to withdraw"); 
  
    if(withdraw_amount> 0 && withdraw_amount!== null && withdraw_amount!== ""){ 
        withdraw_amount= parseFloat(withdraw_amount); 

        if(withdraw_amount>0 && withdraw_amount<= total){
            total -= withdraw_amount  ;
 
            balance.innerHTML = "$" + total.toFixed(2);

            data.push(-withdraw_amount); 

            updateHistory(); 

        }else{ 
            alert("Invalid withdraw amount. Amount must be greater than 0, less or equal to your balance.")
        }
    
    }  else {
        alert ("Invalid input or operation canceled.")   
    }  

   

})
