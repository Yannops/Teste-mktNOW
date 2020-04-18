$('.carousel').carousel({
  interval: 3000,
});

function apiRequest() {
  alert('Pressione F12 e vá até console!')    
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://restcountries-v1.p.rapidapi.com/name/Brazil",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key": "313efa0894mshe9b1c6ebe11a103p1f1addjsn415820c8d588"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response)
  });
}