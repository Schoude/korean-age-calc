// helper functions
function getAge(birthday) {
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function setCurrentYear(birthday) {
  let thisYear = new Date(Date.now()).getFullYear();
  let thisYearBdayMs = birthday.setFullYear(thisYear);
  return new Date(thisYearBdayMs);
}

function hasBirthDayPassed(thisYearBday) {
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  return now > thisYearBday;
}

function getKoreanAge(westernAge, hasBdayPassed) {
  return hasBdayPassed ? Number(westernAge) + 1 : Number(westernAge) + 2;
}

// main function for calculating the korean age
/**
 * @param {Date} birthday
 * @example Tue Nov 13 1990 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
 * @returns {number[]}
 */
function calcKoreanAge(birthday) {
  let westernAge = getAge(birthday);
  let thisYearBday = setCurrentYear(birthday);
  getKoreanAge(westernAge, hasBirthDayPassed(thisYearBday));
  return {
    westernAge,
    koreanAge: getKoreanAge(westernAge, hasBirthDayPassed(thisYearBday))
  };
}

module.exports.calcKoreanAge = calcKoreanAge;
