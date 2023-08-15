document.querySelector('#btn-withdraw').addEventListener('click', function(){

    const inputWithdrawalBalance = document.querySelector('#input-withdraw');
    const placeWithdrawAmountString = inputWithdrawalBalance.value ;
    const placeWithdrawAmount = parseFloat(placeWithdrawAmountString);


inputWithdrawalBalance.value = ' '; 

    if(isNaN(placeWithdrawAmount)){
        alert('Pleace provide me a number')
        return;
    }

    // add withdraw amountpl

    const totalWithdwalAmount = document.querySelector('#withdraw-blance');
    const withdrawalAmountString = totalWithdwalAmount.innerText;
    const withdrawalAmount = parseFloat(withdrawalAmountString);

// cut withdraw amount 

const finalBalanceTotal = document.querySelector('#total-blance');
const finalAmountString =finalBalanceTotal.innerText;
const finalAmount = parseFloat(finalAmountString);


if(placeWithdrawAmount < withdrawalAmount ){
    alert('Instruficient Blance');
    return;
}else{

}

const currentWithdrawlAmount = withdrawalAmount + placeWithdrawAmount;
    totalWithdwalAmount.innerText = currentWithdrawlAmount;

const currentFinalBalance = finalAmount - placeWithdrawAmount
finalBalanceTotal.innerText = currentFinalBalance;


})