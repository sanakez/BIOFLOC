document.addEventListener("DOMContentLoaded", () => {
  const displaySensorData = (data) => {
    const sensorContainer = document.getElementById('sensorContainer');
    sensorContainer.innerHTML = '';

    for (const sensor in data) {
      const sensorDiv = document.createElement('div');
      sensorDiv.classList.add('sensor');

      sensorDiv.innerHTML = `
        <h2>${sensor}</h2>
        <p>${data[sensor]}</p>
      `;

      sensorContainer.appendChild(sensorDiv);
    }
  };

  const updateSensorDataPeriodically = () => {
    // Simulate fetching data from sensors (replace this with your actual data retrieval logic)
    const simulatedSensorData = {
      Turbidity: getRandomValue(5, 6).toFixed(1) + " NTU",
      pH: getRandomValue(7.5, 8).toFixed(1),
      Temperature: getRandomValue(25, 26).toFixed(1) + "°C",
      DissolvedOxygen: getRandomValue(5, 5.1).toFixed(1) + " mg/L",
      WaterLevel: getRandomValue(40, 41).toFixed(1) + " cm",
    };

    // Display the simulated data on the website
    displaySensorData(simulatedSensorData);
  };

  // Function to get a random value in a given range
  const getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Update sensor data initially
  updateSensorDataPeriodically();

  // Periodically update sensor data (every 10 seconds)
  setInterval(updateSensorDataPeriodically, 10000);
});
