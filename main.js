import { calcKoreanAge } from 'korean-age';

let westernAge = null;
let koreanAge = null;
let birthdayClear = null;

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
  if (birthdayClear == null || event.target.value === '') {
    calculateAgeBtn.setAttribute('disabled', true);
    deleteValuesBtn.setAttribute('disabled', true);
    resultContainer.style.display = 'none';
  } else {
    formControlBtn.style.display = 'flex';
    calculateAgeBtn.removeAttribute('disabled');
    deleteValuesBtn.removeAttribute('disabled');
  }
});

calculateAgeBtn.addEventListener('click', e => {
  e.preventDefault();
  let ages = calcKoreanAge(birthdayClear);
  resultContainer.style.display = 'block';
  ageValueWesternElement.innerText = ages.westernAge;
  ageValueKoreanElement.innerText = ages.koreanAge;
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
