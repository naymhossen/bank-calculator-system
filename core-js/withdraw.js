document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdrawalAmount = getInputValueById('input-withdraw');
    const previousWithdraw = getTextElemetnValueById('withdraw-blance');
    const totalWithdrawAmount = previousWithdraw + newWithdrawalAmount ;
    setTextElementValueById('withdraw-blance', totalWithdrawAmount);

    const previousBlanceTotal = getTextElemetnValueById('total-blance');
    const newBlanceTotal = previousBlanceTotal - newWithdrawalAmount ;
    setTextElementValueById('total-blance', newBlanceTotal);
})