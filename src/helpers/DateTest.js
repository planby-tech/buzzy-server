import moment from "moment-timezone";

const addHours = (date, numOfHours) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  return date;
};

const KST = (date) => {
  const dateToString = moment(date)
    .utc()
    .utcOffset("+09:00")
    .format("YYYY-MM-DD/HH시 mm분");
  return dateToString;
};

const UTC = (string) => {
  const date = string.split("/")[0];
  const time =
    string.split("/")[1].split(" ")[0].replace("시", "") +
    ":" +
    string.split("/")[1].split(" ")[1].replace("분", "") +
    ":00:000";
  const stringToDate = addHours(-9, new Date(date + " " + time));
  return stringToDate;
};

const date = new Date();

console.log(KST(date));
console.log(UTC(KST(date)));