const deposit = document.getElementById('btn-deposit');
deposit.addEventListener('click', function(){
    const depositField = document.getElementById('deposit-amount');
    let newDepositAmountString= depositField.value;
    let newDepositAmount = parseFloat(newDepositAmountString);
    
    // get the deposit total
    // for none input (input, text area) use innerText to get text.
    const depositTotalElement = document.getElementById('deposit-total');
    let previousDepositTotalString = depositTotalElement.innerText;
    let previousDepositTotal = parseFloat(previousDepositTotalString);
    
    //add deposited amount to previous deposite amount
    let currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set value to deposit amount
    depositTotalElement.innerText = currentDepositTotal;
    // clear the depost field
    depositField.value = '';
    
    // change value of total balance

    let totalBalance = document.getElementById('balance-total');
    let previousBalanceString = totalBalance.innerText;
    let previousTotalBalance = parseFloat(previousBalanceString);
    // calculate current total balance 

    let currentTotalBalance = previousTotalBalance + newDepositAmount;
    console.log((typeof currentTotalBalance))
    // set the total balance 
    totalBalance.innerText = currentTotalBalance;
})