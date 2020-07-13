export const fetchLocationId = async city => {
    const response = await fetch(
      `https://www.metaweather.com/api/location/search/?query=${city}`,
    );
    const locations = await response.json();
    return locations[0].woeid;
  };
  
  export const fetchWeather = async woeid => {
    const response = await fetch(
      `https://www.metaweather.com/api/location/${woeid}/`,
    );
    const { title, consolidated_weather } = await response.json();
    const { weather_state_name, the_temp } = consolidated_weather[0];
  
    return {
      location: title,
      weather: weather_state_name,
      temperature: the_temp,
    };
  };

export const fetchBackground = async (weather, location) => {
  const response = await fetch(
    `https://source.unsplash.com/1600x900/?${weather},${location}`,
  );
  const { jsonResponse } = await response.json();
};