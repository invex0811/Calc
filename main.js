'use strict'

function calc() {
    let time = document.getElementById('inputTime').value;
    let rate = document.getElementById('inputRate').value;
    let inputBonus = document.getElementById('inputBonus');
    let vacationCheckbox = document.getElementById('vacation');
    let tax = document.getElementById('tax');
    let checkBonus = document.getElementById('bonus');
    let dollarRate = document.getElementById('dollarRate');
    let totalMoney;
    let percentForVacation;
    let overTime;

    time = +time;
    rate = +rate;
    let overRate = (rate / 2) + rate;

    document.querySelector("#totalTime").innerHTML = 'Time: ' + time;
    document.querySelector("#rate").innerHTML = 'Rate: ' + rate;


    if (time <= 160) {

        totalMoney = time * rate;

    } else if (rate == 2) {

        totalMoney = time * 2;
        document.querySelector("#overRate").innerHTML = 'Overrate: ' + rate;

    } else {

        overTime = time - 160;
        document.querySelector("#overTime").innerHTML = 'Overtime: ' + overTime.toFixed(2);
        totalMoney = (overTime * overRate) + 160 * rate
        document.querySelector("#overRate").innerHTML = 'Overrate: ' + overRate;

    }

    switch (vacationCheckbox.checked) {
        case true:

            percentForVacation = totalMoney / 100 * 4;
            totalMoney += percentForVacation;

            break;

        default:

            percentForVacation = totalMoney;

            break;
    }
    switch (tax.checked) {
        case true:

            totalMoney += 45

            break;

        default:
            break;
    }
    switch (checkBonus.checked) {
        case true:

            inputBonus.style.display = 'block';

            document.querySelector("#bonusLine").innerHTML = 'Bonus: ' + inputBonus.value;

            inputBonus = +inputBonus.value;

            totalMoney += inputBonus;

            break;

        case false:

            inputBonus.style.display = 'none';

            document.querySelector("#bonusLine").innerHTML = 'Bonus: 0'

            break;
    }


    let infoWrap = document.getElementById('infoWrap');
    if (time == '') {

        infoWrap.style.display = 'none'

    } else {
        infoWrap.style.display = ''
    }


    totalMoney = Math.round(totalMoney);
    document.querySelector("#money").innerHTML = 'Money: ' + totalMoney;

    switch (fivePercentTax.checked) {
        case true:

            dollarRate.style.display = 'block';

            break;

        case false:

            dollarRate.style.display = '';

            break;
    }

    let fivePercent = (totalMoney * dollarRate.value) / 100 * 5;
    document.querySelector('#taxFiveLine').innerHTML = '5% Tax:' + fivePercent;

}




// setting theme

// function clickOnSettingIcon() {
//     let setting = document.getElementById('setting');
//     setting.classList.toggle('visible');
// }

// let background = document.getElementById('background');
// let color = document.getElementById('color');
// let fontSize = document.getElementById('fontSize');

// function themeChange() {

//     document.body.style.backgroundColor = background.value;

//     document.body.style.color = color.value;

//     document.body.style.fontSize = fontSize.value + 'px';
// }

// function reset() {

//     document.body.style.backgroundColor = '';
//     document.body.style.color = '';
//     document.body.style.fontSize = '';

//     background.value = '';
//     color.value = '';
//     fontSize.value = '';
// }

// function showleftBar() {
//     let leftBar = document.getElementById('leftBar');
//     let arrow = document.getElementById('arrow');

//     leftBar.classList.toggle('open-bar');
//     arrow.classList.toggle('arrow-style');
// }