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
    const simulatedSensorData = {
      Turbidity: getRandomValue(5, 6).toFixed(1) + " NTU",
      pH: getRandomValue(7.5, 8).toFixed(1),
      Temperature: getRandomValue(25, 26).toFixed(1) + "°C",
    };

    // Display the simulated data on the website
    displaySensorData(simulatedSensorData);
  };

  const getRandomValue = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  updateSensorDataPeriodically();

  setInterval(updateSensorDataPeriodically, 2000);
});
