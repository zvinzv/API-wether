// https://api.openweathermap.org/data/2.5/weather?q=najaf&appid=aab190410ae73526d1054a2c5502527c&units=metric

// axios.get('https://api.openweathermap.org/data/2.5/weather?q=najaf&appid=aab190410ae73526d1054a2c5502527c&units=metric')
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// let img2 = document.getElementById("imag")
// let temp2 = document.getElementById("temp")
// let city2 = document.getElementById("city")
// let Humidity2 = document.getElementById("humidity")
// let wind2 = document.getElementById("wind")
function updateData(type, temp, city, humidity, wind) {
  document.getElementById("root").innerHTML = `
  <div class="wether">
      
        <img src="./images/${type.toLowerCase()}.png" id="imag" alt="">
        <div>
          <h1 id="temp">${Math.round(temp)}°c</h1>
          <h1 id="city">${city}</h1>
        </div>
      </div>
      <div class="detiel">
        <div class="col">
          <img src="./images/humidity.png" alt="">
          <div>
            <p class="humidity" id="humidity">${humidity}<span class="km">%</span></p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src="./images/wind.png" alt="">
          <div>
            <p class="wind" id="wind">${wind}<span class="km">km/h</span></p>
            <p>Wind</p>
          </div>
        </div>
      </div>`;
}
function rejUpdateData() {
  document.getElementById("root").innerHTML = `
  <div class="wether">
        <h1 style="font-size: 10rem;color: white;">404</h1>
        <h3 style="font-size: 1.5rem;color: white; line-height: 1; font-weight: 400;">Not Found City/Country.</h3>
      </div>
      
      `;
}

let input = document
  .getElementById("input")
  .addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.value}&appid=aab190410ae73526d1054a2c5502527c&units=metric`
        )
        .then(function (response) {
          let type = response.data.weather[0].main;
          let temp = response.data.main.temp;
          let city = response.data.name;
          let humidity = response.data.main.humidity;
          let wind = response.data.wind.speed;
          updateData(type, temp, city, humidity, wind);
        })
        .catch(function () {
          rejUpdateData();
        });
    }
  });
