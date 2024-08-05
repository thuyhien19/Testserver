const  apiKey = "b99e08f55ec22fa6fc67cd608d256d87" ;
const  apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}" ;

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
     
    console.log(data);
}
checkWeather();

Ham goi 
let + thuoctinh = "value " 
const + thuoc tinh = "value "