document.addEventListener("DOMContentLoaded", () => {
  const socket = new WebSocket('ws://192.168.4.1/ws'); // Replace with your ESP32 IP address

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
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    displaySensorData(data);
  };
});
