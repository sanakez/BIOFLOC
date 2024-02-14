document.addEventListener("DOMContentLoaded", () => {
  const socket = io(); // Initialize WebSocket connection

  // Log WebSocket connection status
  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });

  socket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });

  // Function to display sensor data on the webpage
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

  // Listen for sensor data from the WebSocket server and display it
  socket.on('sensorData', (data) => {
    displaySensorData(data);
  });
});
