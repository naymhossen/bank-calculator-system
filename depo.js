
function getInputFiledValueById(inputid){
    const element = document.getElementById(inputid);
    const elementInputvalueString = element.value ;
    const elementValue = parseFloat(elementInputvalueString);
    element.value  = ' ';
    return elementValue;
}

function getTextValueById(textId){
    const inputText = document.getElementById(textId);
    const inputTextValueByString = inputText.innerText;
    const inputTextValue = parseFloat(inputTextValueByString);
    return inputTextValue;
}

function setElementValueById(elementId, newValue){
    const setElement = document.getElementById(elementId);
    setElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const firstDepositAmount = getInputFiledValueById("deposit-filed");
    const totalDepositAmount = getTextValueById("deposit-amount");
    const sumDepositAmount = totalDepositAmount + firstDepositAmount;

    setElementValueById('deposit-amount', sumDepositAmount); 

const isMainBalanceAmount = getTextValueById('total-blance');
const totalMainBalanceAmount = isMainBalanceAmount + firstDepositAmount;
setElementValueById('total-blance', totalMainBalanceAmount);

})