function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value ; 
    const inputFieldValue = parseFloat(inputValueString);
    inputField.value = ' ';
    return inputFieldValue ;
}

function getTextElemetnValueById(textId){
    const getText = document.getElementById(textId);
    const getTextValueString = getText.innerText;
    const getTextValue = parseFloat(getTextValueString);
    return getTextValue
}

function setTextElementValueById(elementId, newvalue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newvalue;

}

document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputValueById("deposit-filed");
    const preViousdepositTotal = getTextElemetnValueById('deposit-amount') 
    const newDepositTotal = preViousdepositTotal + newDepositAmount ;
    setTextElementValueById('deposit-amount', newDepositTotal);

    const previousBlanceTotal = getTextElemetnValueById('total-blance')
    const newBlanceTotal = previousBlanceTotal + newDepositAmount;
    setTextElementValueById('total-blance', newBlanceTotal);

})