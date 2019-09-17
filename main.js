const resultArray = ["walcz", "przemyśl to jeszcze raz"];

const btnAddAdvice = document.querySelector('.add');
const btnResetAdvice = document.querySelector('.clean');
const btnShowAdvices = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const areaDisplayAdvice = document.querySelector('h1');
const input = document.querySelector('input');

btnAddAdvice.addEventListener('click', (event) => {
    event.preventDefault();

    if (input.value.length) {
        resultArray.push(input.value);
        console.log(resultArray);
        input.value = "";

    } else {
        alert('wpisujesz pusty ciąg znakow')
    }
})


btnResetAdvice.addEventListener('click', () => {
    event.preventDefault();
    resultArray.length = 0;
    console.log(resultArray);
    areaDisplayAdvice.textContent = "";
})


btnShowAdvices.addEventListener('click', () => {
    const drawAdvice = (Math.floor(Math.random() * resultArray.length));
    console.log(drawAdvice);
    areaDisplayAdvice.textContent = resultArray[drawAdvice];
})


btnShowOptions.addEventListener('click', () => {
    alert(resultArray.join(" --- "));
})