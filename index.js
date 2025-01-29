const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateObj = new Date();
const month = months[dateObj.getUTCMonth()]; //months[0-11]
const day = dateObj.getUTCDate();

let newDate;

if (day == 1 || day == 21 || day == 31) {
    newDate = `${month}, ${day}st`;
} else if (day == 2 || day == 22) {
    newDate = `${month}, ${day}nd`;
} else if (day == 3 || day == 23) {
    newDate = `${month}, ${day}rd`;
} else {
    newDate = `${month}, ${day}th`;
};

const spanElement = document.getElementById('date');
spanElement.textContent = newDate;
