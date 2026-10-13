/** @param {{startDate:string|null,endDate:string|null,status:string}} workshop @param {Date} [now] */
export function workshopStatus(workshop, now = new Date()) {
  if (!workshop.startDate || !workshop.endDate) return "archive";
  if (new Date(workshop.endDate).getTime() < now.getTime()) return "past";
  if (new Date(workshop.startDate).getTime() <= now.getTime())
    return "in-progress";
  return "upcoming";
}
/** @param {string} date */
export function workshopDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Karachi",
  }).format(new Date(date));
}
