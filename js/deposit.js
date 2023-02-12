// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // for input field use.value to the the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositeAmountString = depositField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    
    // step-3: get the current deposit total
    // for non-input(element other than input,textarea) use innerText to the text
    const depositTotalElement = document.getElementById('deposite-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step-4: add bumbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositeAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = '';
})