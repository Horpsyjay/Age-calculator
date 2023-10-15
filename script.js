let isValid = false;

const dayInput = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')

const resultYear = document.querySelector('.result-years');
const resultMonth = document.querySelector('.result-months');
const resultDay = document.querySelector('.result-days');

const errMsg = document.querySelectorAll('.error');
const label = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input')
const calcBtn = document.getElementById('btn');


const validateDay = () => {
    if (+dayInput.value > 31) {
        errMsg[0].textContent = 'Must be a valid date';
        for (const lbl of label) {
            lbl.style.color = 'red';
        }
        inputs.forEach((input) => {
            input.style.border = '1px solid var(--error)';
        })
        isValid = false;
        return;

    } if (+dayInput.value <= 0) {
        isValid = false;
        errMsg[0].textContent = `S'on sere ni? field cannot be blank`;
        for (const lbl of label) {
            lbl.style.color = 'red';
        }
        inputs.forEach((input) => {
            input.style.border = '1px solid var(--error)';
        })

        return;

    } else {
        isValid = true;
        errMsg[0].textContent = '';
        inputs.forEach((input) => {
            input.style.border = '';
        })
        for (const lbl of label) {
            lbl.style.color = '';
        }

    }
}

const validateMonth = () => {
    if (+monthInput.value > 12) {
        errMsg[1].textContent = 'Must be a valid month';
        for (const lbl of label) {
            lbl.style.color = 'red';
        }
        inputs.forEach((input) => {
            input.style.border = '1px solid var(--error)';
        })

        isValid = false;
        return;

    } if (+monthInput.value <= 0) {
        isValid = false;
        errMsg[1].textContent = `kai now.. field cannot be blank`;
        for (const lbl of label) {
            lbl.style.color = 'red';
        }
        inputs.forEach((input) => {
            input.style.border = '1px solid var(--error)';
        })
        return;

    } else {
        isValid = true;
        errMsg[1].textContent = '';
        inputs.forEach((input) => {
            input.style.border = '';
        })
        for (const lbl of label) {
            lbl.style.color = '';
        }

    }


}

const validateYear = () => {
    if (+yearInput.value > 2023) {
        errMsg[2].textContent = 'Wait, you from the future or what?';
        for (const lbl of label) {
            lbl.style.color = 'red';
        }
        inputs.forEach((input) => {
            input.style.border = '1px solid var(--error)';
        })

        isValid = false;
        return;

    } if (+yearInput.value.length < 4) {
        isValid = false;
        errMsg[2].textContent = `Stop sebe.. must be a valid year`;
        for (const lbl of label) {
            lbl.style.color = 'red';
        }
        inputs.forEach((input) => {
            input.style.border = '1px solid var(--error)';
        })

        return;

    } else {
        isValid = true;
        errMsg[2].textContent = '';
        inputs.forEach((input) => {
            input.style.border = '';
        })
        for (const lbl of label) {
            lbl.style.color = '';
        }

    }
}


const calculateAge = () => {
    if (isValid) {
        let DOB = `${monthInput.value}/${dayInput.value}/${yearInput.value}` // gets user input
        let birthdayObj = new Date(DOB);  // constructs it to a date object
        let diffInAge = Date.now() - birthdayObj;  // subtracts user age from pesent time in milliseconds 
        let ageResult = new Date(diffInAge);

        let outputYears = ageResult.getUTCFullYear() - 1970;
        let outputMonths = ageResult.getUTCMonth();
        let outputDays = ageResult.getUTCDay();

        //  Adding the results to DOM
        resultYear.textContent = outputYears;
        resultMonth.textContent = outputMonths;
        resultDay.textContent = outputDays;

    } else {
        alert('Egbon, fill the fields appropriately');
    }

    inputs.forEach((input) => {
        input.value = '';
    })

    return;
}


dayInput.addEventListener('input', validateDay);
monthInput.addEventListener('input', validateMonth);
yearInput.addEventListener('input', validateYear);
calcBtn.addEventListener('click', calculateAge);