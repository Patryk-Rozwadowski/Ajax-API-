var url = 'http://api.icndb.com/jokes/random';
var jokeButton = document.getElementById('get-joke');
var jokeOutput = document.getElementById('joke');

jokeButton.addEventListener('click', function() {
  getJoke();
});

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    jokeOutput.innerHTML = response.value.joke;
  });
  xhr.send();
}

getJoke();
