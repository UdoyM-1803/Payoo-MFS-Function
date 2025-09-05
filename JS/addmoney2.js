document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');

        // Worse way to validate pin number
        if (pinNumber === 1234) {

        }
        else {
            alert('Failed to Transaction.');
        }
    })