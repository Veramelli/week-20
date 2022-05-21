
fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then(response =>response.json())
.then(planet =>{
    document.querySelector('h1').innerText =planet.title;
    document.querySelector('img').src=planet.url;
    document.querySelector('.about').innerText =planet.explanation;
})
.catch(error =>console.log(error));
