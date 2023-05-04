function getweather() {
    let cityName = document.getElementById("cityName").value;



    axios.get(`http://api.weatherapi.com/v1/current.json?key=a1b235efa42847b1b6f84850231604&q=${cityName}&aqi=yes`)
        .then(function (response) {
            console.log(response);

            let weather = response.data.current.temp_c;
            document.getElementById("result").innerHTML = `Your Temperature is °${weather}`;

            // handle success

        })
        .catch(function (error) {
            // handle error
            document.write(error);
        })
        .finally(function () {
            // always executed
        });
}