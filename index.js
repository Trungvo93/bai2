import 'regenerator-runtime/runtime';
import axios from 'axios';

//Lấy data theo ID
async function getData() {
  try {
    const cityName = document.getElementById("inpWeather").value.trim();
    const res3 = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=06b48d7f898665ae92a12aa3908c5a2e`
    )

    const date = new Date();
    const temp = res3.data.main.temp - 273.15;
    const humidity = res3.data.main.humidity;
    console.log(res3.data);
    document.getElementById("showError").innerHTML = "";
    document.getElementById("showWeatherTitle").innerHTML = cityName.toUpperCase();
    document.getElementById("showWeatherTemp").innerHTML = `Nhiệt độ: ${temp}&deg;C`;
    document.getElementById("showWeatherHumidity").innerHTML = `Độ ẩm: ${humidity}%`;
    document.getElementById("showWeatherDate").innerHTML = `Ngày ${date.getDate()}, tháng ${date.getMonth()}, năm ${date.getFullYear()}`;
    document.getElementById("inpWeather").value = '';
    document.getElementById("inpWeather").focus();

  } catch (e) {
    console.log("Can't get data id: ", e);
    document.getElementById("showError").innerHTML = "Nhập tên tỉnh thành có dấu và chính xác"
  }
}

const submitWeather = document.getElementById("submitWeather");
submitWeather.addEventListener('click', getData);