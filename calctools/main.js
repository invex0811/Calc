'use strict'
function calc() {
    let time = document.getElementById('inputTime').value;
    let rate = document.getElementById('inputRate').value;
    let vacationCheckbox = document.getElementById('vacation');
    let tax = document.getElementById('tax');
    let totalMoney;
    let percentForVacation;
    let overTime;

    time = +time;
    rate = +rate;
    let overRate =  (rate / 2) + rate;

    document.querySelector("#totalTime").innerHTML = 'Time: ' + time;
    document.querySelector("#rate").innerHTML = 'Rate: ' + rate;
    document.querySelector("#overRate").innerHTML = 'Overrate: ' + overRate;

    if (time <= 160) {
        
        totalMoney = time * rate;
                      
    }else{

        overTime = time - 160;
        document.querySelector("#overTime").innerHTML = 'Overtime: ' + overTime.toFixed(2) ;
        totalMoney = (overTime * overRate) + 160 * rate 
        
    }
        
    switch (vacationCheckbox.checked) {
        case true:

            percentForVacation = totalMoney / 100 * 4 ;
            totalMoney += percentForVacation;

            break;
    
        default:

            percentForVacation = totalMoney ;

            break;
    }
    switch (tax.checked) {
        case true:
            
            totalMoney += 45 

            break;
    
        default:
            break;
    }

    let infoWrap = document.getElementById('infoWrap');
    if (time == '') {

        infoWrap.style.display = 'none'

    }else {
        infoWrap.style.display = ''
    }


    totalMoney = Math.floor(totalMoney);
    document.querySelector("#money").innerHTML = 'Money: ' + totalMoney;
}



