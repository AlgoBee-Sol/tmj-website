/** @param {Date} [now] */
export function clinicToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
/** @typedef {{name:string,phone:string,date:string,time:string,consent:boolean,company:string}} Appointment */
/** @param {Appointment} value @param {string} today */
export function validateAppointment(value, today) {
  /** @type {Record<string,string>} */
  const errors = {};
  if (value.name.trim().length < 2 || value.name.trim().length > 80)
    errors.name = "Enter your name (2–80 characters).";
  if (
    !/^[+\d\s()-]+$/.test(value.phone) ||
    value.phone.replace(/\D/g, "").length < 10 ||
    value.phone.replace(/\D/g, "").length > 15
  )
    errors.phone = "Enter a valid phone number with 10–15 digits.";
  const parsed = new Date(value.date + "T12:00:00Z");
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value.date) ||
    !Number.isFinite(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== value.date ||
    value.date < today
  )
    errors.date = "Choose today or a future date.";
  if (!["Any available time", "Afternoon", "Evening"].includes(value.time))
    errors.time = "Choose a time preference.";
  if (!value.consent)
    errors.consent = "Confirm that you agree to share these booking details.";
  return errors;
}
/** Booking details only: no symptom text or health data. @param {Appointment} value */
export function appointmentMessage(value) {
  return [
    "Appointment request — The Muscular Junction",
    `Name: ${value.name.trim()}`,
    `Phone: ${value.phone.trim()}`,
    `Preferred date: ${value.date}`,
    `Time preference: ${value.time}`,
    "Please confirm availability.",
  ].join("\n");
}
