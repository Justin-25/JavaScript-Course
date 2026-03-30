import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from './importFile.js';

// const date = dayjs();
// const todayDate = date.add(
//   7, 'days'
// );
// const dateFormat = todayDate.format('dddd')

// console.log(dateFormat)


console.log(isSatSun(dayjs('2026-04-10')));