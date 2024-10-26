// How Many Days Between Two Dates

function getDays(date1, date2) {
  let oneDay = 1000 * 60 * 60 * 24;
  const difference = date2 - date1;

return difference / oneDay;
}

console.log(getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
));

console.log(getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
));

console.log(getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
));

