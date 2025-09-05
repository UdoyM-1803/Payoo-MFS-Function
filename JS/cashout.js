document.getElementById('btn-cash-out')
    .addEventListener('click', function(event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('cash-out-amount');
        const pinNumber = getInputFieldValueById('cash-out-pin');

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('No  money for you..... DGM');
        }
    })