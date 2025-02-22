const express = require("express");
const app = express();
app.use(express.json());

console.log(new Date()); // UTC date
console.log(Date()); // Local date time (CEST for os)
console.log(Date.now()); // Unix time / Epoch (Seconds since 1970 Jan. 1st)

// assignment: Create a route called /months which returns the current month as a response
const months = [
  "January",
  "Febuary",
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

app.get("/months/v1", (req, res) => {
  const currentMonth = months[new Date().getMonth()];
  res.send({ data: currentMonth });
});

app.get("/months/v2", (req, res) => {
  const currentMonth = new Date().toLocaleDateString("en-UK", {
    month: "long",
  });

  res.send({ data: currentMonth });
});

app.get("/months/v3", (req, res) => {
  const currentMonth = Date().substring(4, 7);
  res.send({ data: currentMonth });
});

app.get("/months/v4", (req, res) => {
  const currentMonth = Date().split(" ")[1];
  res.send({ data: currentMonth });
});

// assignment implement /days that returns the weekday as a word
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

app.get("/days/v1", (req, res) => {
    const currentWeekday = days[new Date().getDay()];
    res.send({data: currentWeekday})
})

app.get("/days", (req, res) => {
  const currentWeekday = new Date().toLocaleDateString("en-UK", {
    weekday: "long",
  });
  res.send({ data: currentWeekday });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port`, PORT));
