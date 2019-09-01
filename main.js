let now = new Date();
now.setHours(0, 0, 0, 0);
let nowClear = new Date(now);
let nowLocalDate = nowClear.toLocaleDateString();
let westernAge = null;
let koreanAge = null;
let birthdayClear = null;
let birthday = null;
let thisYearBday = null;

const datepicker = document.querySelector('#birthday-picker');
const formControlBtn = document.querySelector('.form-control-btn');

const calculateAgeBtn = document.querySelector('.calculate-age');
const deleteValuesBtn = document.querySelector('.delete-values');
const resultContainer = document.querySelector('.result');
const ageValueWesternElement = document.querySelector('.age-value-western');
const ageValueKoreanElement = document.querySelector('.age-value-korean');

if (westernAge == null) {
  formControlBtn.style.display = 'none';
  calculateAgeBtn.setAttribute('disabled', true);
  deleteValuesBtn.setAttribute('disabled', true);
  resultContainer.style.display = 'none';
}

datepicker.addEventListener('input', event => {
  birthdayClear = new Date(event.target.value);
  birthdayClear.setHours(0, 0, 0, 0);
  westernAge = getAge(birthdayClear);

  thisYearBday = setCurrentYear(birthdayClear);
  if (thisYearBday == null || event.target.value === '') {
    calculateAgeBtn.setAttribute('disabled', true);
    deleteValuesBtn.setAttribute('disabled', true);
    resultContainer.style.display = 'none';
  } else {
    formControlBtn.style.display = 'flex';
    calculateAgeBtn.removeAttribute('disabled');
    deleteValuesBtn.removeAttribute('disabled');
  }
});

function getAge(birthday) {
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function setCurrentYear(bDayClear) {
  let thisYear = new Date(Date.now()).getFullYear();
  let thisYearBdayMs = bDayClear.setFullYear(thisYear);
  return new Date(thisYearBdayMs);
}

function hasBirthDayPassed(thisYearBday) {
  1;
  return now > thisYearBday;
}

function getKoreanAge(westernAge, hasBdayPassed) {
  return hasBdayPassed ? Number(westernAge) + 1 : Number(westernAge) + 2;
}

calculateAgeBtn.addEventListener('click', e => {
  e.preventDefault();
  resultContainer.style.display = 'block';
  ageValueWesternElement.innerText = westernAge;
  ageValueKoreanElement.innerText = getKoreanAge(
    westernAge,
    hasBirthDayPassed(thisYearBday)
  );
});

deleteValuesBtn.addEventListener('click', e => {
  e.preventDefault();
  datepicker.value = null;
  westernAge = null;
  koreanAge = null;
  ageValueWesternElement.innerText = westernAge;
  ageValueKoreanElement.innerText = koreanAge;

  formControlBtn.style.display = 'none';
  calculateAgeBtn.setAttribute('disabled', true);
  deleteValuesBtn.setAttribute('disabled', true);
  resultContainer.style.display = 'none';
});
