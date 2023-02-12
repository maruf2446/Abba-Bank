/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4-5. calculate total withdraw amount
5. get the prives total
6.calculate new balance total
6-5. st the new balance total
7. clear the input field
*/ 

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);

    // step-7
    withdrawField.value = ''; 

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank e eto TK nai');
        return;
    }

    // step-4
    const currentWithdrawTotal =  previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    withdrawField.value = '';

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7
    withdrawField.value = '';

})