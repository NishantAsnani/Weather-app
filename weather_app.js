const form=document.querySelector('#SearchedForm')
form.addEventListener('submit',async (e)=>
{
    e.preventDefault();
    const text=form.elements.city.value;
    
    const res=await axios.get(`http://api.weatherstack.com/current?access_key=3ba6623666ec2f3766cb777b9e875b34&query=${text}`);
    console.log(res);
    const country=res.data.location.country;
    const city=res.data.location.name;
    const temprature=res.data.current.temperature
    const weather=res.data.current.weather_descriptions
    const humidity=res.data.current.humidity
    const wind=res.data.current.wind_speed;
    

    const country_input=document.querySelector('#country')
    const city_input=document.querySelector('#city')
    const temperature_input=document.querySelector('#temperature')
    const weather_input=document.querySelector('#weather_descriptions')
    const wind_input=document.querySelector('#windspeed')
    const humid_input=document.querySelector('#humid')
    


    country_input.innerText=country;
    city_input.innerText=city;
    temperature_input.innerText=temprature;
    weather_input.innerText=weather
    humid_input.innerText=humidity;
    wind_input.innerText=wind;

    var options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {latlng: `${lat},${lon}`, language: 'en'},
        headers: {
          'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
          'x-rapidapi-key': '6adb47d334msh5136643ad3a887ep11b600jsn59e0c02791fe'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });


})
