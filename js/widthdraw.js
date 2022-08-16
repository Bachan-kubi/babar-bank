// 1. get withdraw button to alternate the main wokr
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get withdrawal field and convert them into string.
    const withdrawalField = document.getElementById('withdraw');
    let withdrawAmountString = withdrawalField.value;
    let withdrawAmount = parseFloat(withdrawAmountString);

     // clear withdrawal field source value.
     withdrawalField.value = '';

    if(isNaN(withdrawAmount)){
        alert("please enter number");
        return;
    }

    // get the total widthdrawal 
    const totalWithdrawal = document.getElementById('withdrawal');
    const totalWithdrawalString = totalWithdrawal.innerText;
    // converted to string
    let totalWithdrawalAmount = parseFloat(totalWithdrawalString);

    // calclate the total withdrawalField


    //***calculate the total deposit after widhtdrawal*** */

    const totalBalanceElement = document.getElementById('balance-total');
    let totalBalanceString = totalBalanceElement.innerText;
    let totalBalance = parseFloat(totalBalanceString);

    
    // if total balance is less than withdrawal amount, than use this logic
    if(withdrawAmount>totalBalance){
        alert("Etto taka ai");
        return;
    }
     // get total withdrawal amount 
    let currentWithdrawal = totalWithdrawalAmount + withdrawAmount;
    totalWithdrawal.innerText = currentWithdrawal;
    // calculate total amount
    let currentTotalBalance = totalBalance - currentWithdrawal;
    // total current ballance
    totalBalanceElement.innerText = currentTotalBalance;



})