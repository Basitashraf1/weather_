const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',options)
    .then(response => response.json())
    .then(response => console.log (response))
    .catch(err => console.error(err));
