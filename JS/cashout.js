document.getElementById('btn-cash-out')
    .addEventListener('click', function(event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('cash-out-amount');
        const pinNumber = getInputFieldValueById('cash-out-pin');
    })