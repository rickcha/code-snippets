function timeToMinute(time) {
  const [hours, minutes] = time.split(":").map((item) => parseInt(item));
  return hours * 60 + minutes;
}

function minuteToTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = ("0" + (time % 60)).slice(-2);
  return [hours, minutes].join(":");
}

function updateSchedule(calendar, dailyBounds) {
  const firstSchedule = ["0:00", dailyBounds[0]];
  const lastSchedule = [dailyBounds[1], "23:59"];
  const combinedSchedule = [firstSchedule, ...calendar, lastSchedule];
  return combinedSchedule.map((item) => item.map(timeToMinute));
}

function mergeSchedules(calendar1, calendar2) {
  const merged = [];
  let count1 = 0;
  let count2 = 0;
  while (count1 < calendar1.length && count2 < calendar2.length) {
    const start1 = calendar1[count1];
    const start2 = calendar2[count2];
    if (start1[0] < start2[0]) {
      merged.push(calendar1[count1]);
      count1++;
    } else {
      merged.push(calendar2[count2]);
      count2++;
    }
  }
  while (count1 < calendar1.length) merged.push(calendar1[count1++]);
  while (count2 < calendar2.length) merged.push(calendar2[count2++]);
  return merged;
}

function flattenSchedules(merged) {
  return merged.reduce((prev, curr) => {
    // case 1: no current schedule
    // case 2: if overlapped, replace last end with the current end
    const last = prev[prev.length - 1];
    if (last === undefined) prev.push(curr);
    else if (last[1] >= curr[0]) last[1] = Math.max(last[1], curr[1]);
    else if (last[1] < curr[0]) prev.push(curr);
    return prev;
  }, []);
}

function complimentSchedules(schedules) {
  const complimentedSchedules = [];
  for (let i = 0; i < schedules.length; i++) {
    const current = schedules[i];
    const next = schedules[i + 1];
    if (next !== undefined) complimentedSchedules.push([current[1], next[0]]);
  }
  return complimentedSchedules;
}

function filterDurationSchedules(schedules, duration) {
  return schedules.filter((item) => item[1] - item[0] >= duration);
}

function timeSchedules(schedules) {
  return schedules.map((item) => item.map((num) => minuteToTime(num)));
}

function calendarMatching(
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  const updatedSchedule1 = updateSchedule(calendar1, dailyBounds1);
  const updatedSchedule2 = updateSchedule(calendar2, dailyBounds2);
  const mergedSchedules = mergeSchedules(updatedSchedule1, updatedSchedule2);
  const flattenedSchedules = flattenSchedules(mergedSchedules);
  const complimentedSchedules = complimentSchedules(flattenedSchedules);
  const filteredSchedules = filterDurationSchedules(
    complimentedSchedules,
    meetingDuration
  );
  const timedSchedules = timeSchedules(filteredSchedules);
  return timedSchedules;
}

// Do not edit the line below.
exports.calendarMatching = calendarMatching;
