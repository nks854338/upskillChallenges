const canvas = document.querySelector(".Chart");

new Chart(canvas, {
  type: "bar",
  data: {
    labels: [
      "<1",
      "1-2 ",
      "3-4",
      "5-9",
      "10-14",
      "15-19",
      "20-24",
      "25-29",
      ">-29",
    ],

    datasets: [
      {
        label: "Btech",
        data: [15, 19, 3, 5, 2, 3, 8, 12, 15],
        borderWidth: 1,
      },
      {
        label: "Mtech",
        data: [7, 12, 5, 12, 18, 3, 19, 12, 15],
        borderWidth: 1,
      },
      {
        label: "BSC",
        data: [9, 19, 3, 5, 12, 3, 5, 18, 6],
        borderWidth: 1,
      },
      {
        label: "MSC",
        data: [19, 5, 3, 5, 2, 23, 15, 8, 16],
        borderWidth: 1,
      },
      {
        label: "BCA",
        data: [5, 19, 3, 5, 2, 3, 15, 8, 6],
        borderWidth: 1,
      },
      {
        label: "MCA",
        data: [5, 19, 3, 5, 12, 7, 5, 8, 6],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "left",
      },
    },

    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
    responsive: true,
  },
});
