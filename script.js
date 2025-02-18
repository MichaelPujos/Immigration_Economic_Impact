function createChart(chartId, chartType, chartLabels, chartData, chartLabel, backgroundColors = null) {
    const ctx = document.getElementById(chartId).getContext("2d");
    new Chart(ctx, {
        type: chartType,
        data: {
            labels: chartLabels,
            datasets: [{
                label: chartLabel,
                data: chartData,
                backgroundColor: backgroundColors || "blue",
                borderColor: "blue",
                borderWidth: 2,
                fill: false
            }]
        }
    });
}

createChart("laborForceChart", "line", [2014, 2016, 2018, 2020, 2022, 2024], [66, 67, 68, 69, 70, 71], "Labor Force Participation (%)");
createChart("employmentChart", "bar", ["Agriculture", "Construction", "Hospitality", "Manufacturing"], [18, 22, 25, 15], "Industry Employment (%)");
createChart("taxChart", "pie", ["Federal Taxes", "State Taxes"], [100, 60], "Tax Contributions (Billion USD)", ["blue", "red"]);
createChart("immigrantPopulationChart", "line", [2014, 2016, 2018, 2020, 2022, 2024], [42, 45, 48, 50, 52, 54], "Total Immigrant Population (millions)");
createChart("unauthorizedWorkforceChart", "bar", [2014, 2016, 2018, 2020, 2022, 2024], [7, 7.5, 8, 8.5, 9, 9.5], "Unauthorized Immigrant Workforce (millions)");
