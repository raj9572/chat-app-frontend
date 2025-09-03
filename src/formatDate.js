import moment from "moment";

export const formatDate = (date) => {
  const m = moment(date);

  if (moment().diff(m, "minutes") < 1) {
    return "just now"; // within 1 minute
  } else if (m.isSame(moment(), "day")) {
    return m.fromNow(); // 👉 "10 minutes ago", "3 hours ago"
  } else if (m.isSame(moment().subtract(1, "day"), "day")) {
    return `yesterday at ${m.format("h:mm A")}`; // 👉 "yesterday at 9:15 PM"
  } else if (moment().diff(m, "days") < 7) {
    return `${m.fromNow()} at ${m.format("h:mm A")}`; 
    // 👉 "2 days ago at 6:20 PM"
  } else {
    return m.format("MMM D [at] h:mm A"); 
    // 👉 "Aug 20 at 4:10 PM"
  }
};


