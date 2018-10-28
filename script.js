function printPrime() {
    let printEl = document.querySelector('ul');
    let inputEl1 = parseInt(document.querySelector('#input1').value);
    let inputEl2 = parseInt(document.querySelector('#input2').value);

    let count = 2;
    printEl.innerHTML = "";
    for (let i = inputEl1; i <= inputEl2; i++) {
        if (isPrime(i)) {
            printEl.innerHTML += `<li>${i}</li>`;
        }
    }
}

function isPrime(numb) {
    let i;
    for (i = 2; i < numb; i++) {
        if (numb % i == 0) {
            break;
        }
    }

    if (i == numb) {
        return true;
    } else {
        return false;
    }
}








function checkPrimeNumber() {
    let inputEl = parseInt(document.querySelector('input').value);

    let i;
    for (i = 2; i < inputEl; i++) {
        if (inputEl % i == 0) {
            break;
        }
    }

    if (i == inputEl) {
        alert('This is prime number');
    } else {
        alert('NOT');
    }
}