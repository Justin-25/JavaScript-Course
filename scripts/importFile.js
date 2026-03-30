export default function isWeekend(date) {
  const week = date.format('dddd');

  if (week === 'Sunday' || week === 'Saturday') {
    console.log(`It's Weekend Today ${week}`)
    return true;
  } else {
    console.log(`It's not Weekend Today ${week}`)
    return false;
  }
}