let now = new Date();
now.setHours(0, 0, 0, 0);
now.toLocaleDateString();
console.log('now', now);
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
  westernAge = event.target.value;
  westernAge = event.target.value;
  westernAge = event.target.value;
  westernAge = event.target.value;
});

datepicker.addEventListener('change', event => {
  birthdayClear = new Date(event.target.value);
  birthdayClear.setHours(0, 0, 0, 0);
  console.log('picked birthday:', birthdayClear);
  thisYearDbady = setCurrentYear(birthdayClear);
  console.log('thisYearDbady', thisYearDbady);
});

function setCurrentYear(bDayClear) {
  let thisYear = new Date(Date.now()).getFullYear();
  let thisYearBdayMs = bDayClear.setFullYear(thisYear);
  return new Date(thisYearBdayMs);
}
