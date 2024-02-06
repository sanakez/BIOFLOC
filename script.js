document.addEventListener("DOMContentLoaded", () => {
  const socket = io(); // Initialize WebSocket connection

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

  // Listen for sensor data from the WebSocket server
  socket.on('sensorData', (data) => {
    displaySensorData(data);
  });
});
