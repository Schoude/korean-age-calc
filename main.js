const now = Date.now();
let nowClear = new Date(now);
let nowLocalDate = nowClear.toLocaleDateString();
let westernAge = null;
let birthdayClear = null;
let birthday = null;
let thisYearBday = null;

const datepicker = document.querySelector('#birthday-picker');
const ageInput = document.querySelector('.age-input');

ageInput.addEventListener('change', event => {
    westernAge = event.target.value;    
})

datepicker.addEventListener('change', event => {  
  birthdayClear = new Date(event.target.value);
  birthday = Date.parse(event.target.value);
  console.log('picked birthday:', birthday);  
  setCurrentYear(birthdayClear);
  hasBdayAlreadyPassed();
});

function setCurrentYear (bDayClear) {
    let thisYear = new Date(Date.now()).getFullYear();
    let formatBday = bDayClear.toLocaleDateString();
    thisYearBday = formatBday.replace(/\d{4}/g, thisYear);
    console.log(formatBday, thisYearBday);
}

// check if birthday already pased, wenn true, dann Alter + 1, ansonsten Alter + 2
function hasBdayAlreadyPassed () {
    const thisYearBdayMs = Date.parse(Date(thisYearBday));
    const difference =  thisYearBdayMs - now;
    console.log('nowLocalDate', nowLocalDate);
    console.log(thisYearBday == nowLocalDate ? true : false);
    
    // if (thisYearBdayMs > now) {
    //     console.log(thisYearBdayMs,  now,'B-Day not yet passed');
    // } else if (thisYearBdayMs < now) {
    //     console.log('B-Day already passed');
    // }    
}



// wenn true, dann Alter + 1, ansonsten Alter + 2
// function isLastDayOfTheYear(now, thisYear) {
//   const lastDayOfYear = new Date(`${thisYear}, 12, 31`);
//   if (now - Date.parse(lastDayOfYear) < 0 ) {
//       console.log('today not last day of year');
//       return false;
//   } else if (now - Date.parse(lastDayOfYear) === 0 ) {
//     console.log('last day of year');
//     return true
//   } 
// }
