function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

console.log(activities_parsed[0].activity_name);

let date = [];
for (let i = 0; i < activities_parsed.length; i++) {
  date.push(activities_parsed[i].activity_date.toString().slice(0, 10));
}

console.log(date.filter(onlyUnique));
let uniqueDate = date.filter(onlyUnique);

let activeMin = [];
for (let i = 0; i < activities_parsed.length; i++) {}

// active min chart
var options = {
  chart: {
    type: "bar",
  },
  series: [
    {
      name: "active-minutes",
      data: [90, 120, 90, 90],
    },
  ],
  xaxis: {
    categories: uniqueDate,
  },
};

// exercise chart
var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

var options2 = {
  chart: {
    type: "pie",
  },
  series: [90, 150, 30, 120],
  labels: ["Sport", "Running", "Swimming", "Cycling"],
};

var chart2 = new ApexCharts(document.querySelector("#exercisechart"), options2);

chart2.render();

// calories intake chart
var options3 = {
  chart: {
    type: "bar",
  },
  series: [
    {
      name: "calories-intake",
      data: [1850, 2100, 1990, 2000, 1780, 2290, 2170],
    },
  ],
  xaxis: {
    categories: [
      "2021-04-05",
      "2021-04-06",
      "2021-04-07",
      "2021-04-08",
      "2021-04-09",
      "2021-04-10",
      "2021-04-11",
    ],
  },
};

var chart3 = new ApexCharts(document.querySelector("#calorieschart"), options3);

chart3.render();

// task completed chart
var options4 = {
  chart: {
    type: "pie",
  },
  series: [6, 1, 2],
  labels: ["Easy", "Medium", "Difficult"],
};

var chart4 = new ApexCharts(document.querySelector("#taskchart"), options4);

chart4.render();
