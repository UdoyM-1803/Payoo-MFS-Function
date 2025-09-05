/**
 * Common Shared functions here
 * */ 

// console.log('Utilities Loaded')

// function getInputFieldValueById() {
//     console.log('We will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}