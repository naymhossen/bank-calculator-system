document.querySelector('#btn-deposit').addEventListener('click', function(){
    // step -01

    const inputDepositAmount = document.querySelector('#input-deposit');
    const newDepositAmountString = inputDepositAmount.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositBalanceAmount = document.querySelector('#deposit-blance-amount');
    const previousDepositTotalString = depositBalanceAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    depositBalanceAmount.innerText=currentDepositAmount; 


// step -2 balenced

const userTotalBalance = document.querySelector('#total-blance');
const userBalanceTypeString = userTotalBalance.innerText;
const userBalanceTypeNumber = parseFloat(userBalanceTypeString);
const userCurrentBalance = userBalanceTypeNumber + newDepositAmount ;
userTotalBalance.innerText = userCurrentBalance;
    inputDepositAmount.value = ' ';
})