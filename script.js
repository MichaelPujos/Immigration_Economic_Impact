// Labor Force Participation Chart
const laborCtx = document.getElementById("laborForceChart").getContext("2d");
new Chart(laborCtx, {
    type: "line",
    data: {
        labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        datasets: [
            {
                label: "Foreign-born (%)",
                data: [66.0, 66.1, 66.2, 66.3, 66.4, 66.5, 66.6, 66.7, 66.8, 66.9, 67.0],
                borderColor: "blue",
                fill: false
            },
            {
                label: "Native-born (%)",
                data: [62.0, 62.1, 62.2, 62.3, 62.4, 62.5, 62.6, 62.7, 62.8, 62.9, 63.0],
                borderColor: "red",
                fill: false
            }
        ]
    }
});

// Employment by Industry Chart
const empCtx = document.getElementById("employmentChart").getContext("2d");
new Chart(empCtx, {
    type: "bar",
    data: {
        labels: ["Agriculture", "Construction", "Hospitality", "Manufacturing", "Professional Services"],
        datasets: [{
            label: "Percentage of Foreign-born Workers",
            data: [17.4, 24.0, 22.0, 18.0, 14.0],
            backgroundColor: "blue"
        }]
    }
});

// Tax Contributions Chart
const taxCtx = document.getElementById("taxChart").getContext("2d");
new Chart(taxCtx, {
    type: "pie",
    data: {
        labels: ["Federal Taxes", "State Taxes"],
        datasets: [{
            label: "Tax Contributions (in billions USD)",
            data: [46.8, 29.3],
            backgroundColor: ["blue", "red"]
        }]
    }
});
