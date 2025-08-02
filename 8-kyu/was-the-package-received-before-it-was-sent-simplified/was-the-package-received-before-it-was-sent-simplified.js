function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  
  const total_hours_passed = duration + (tz_to - tz_from);
​
  const final_hour_value = start + total_hours_passed;
​
  const day_shift = Math.floor((start + duration + tz_to - tz_from) / 24);
​
  return day_shift === -1;
}