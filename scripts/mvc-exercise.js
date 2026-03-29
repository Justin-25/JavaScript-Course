import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// const date = dayjs();
// const todayDate = date.add(
//   7, 'days'
// );
// const dateFormat = todayDate.format('dddd')

// console.log(dateFormat)


const todayDate = {
  method: dayjs().format('dddd')
}

function isWeekend(date) {

}

console.log(isWeekend(6));