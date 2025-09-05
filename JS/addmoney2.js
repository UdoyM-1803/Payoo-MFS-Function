document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');

        if (isNaN(addMoney)) {
            alert('Failed to add money.');
            return;
        }

        // Worse way to validate pin number
        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // Add to Transaction History
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}`;
            

            // Should be a common function
            document.getElementById('transaction-container').appendChild(p);
        } 
        else {
            alert('Failed to Transaction.');
        }
    })