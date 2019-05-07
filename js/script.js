var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
  fetch(quoteUrl, {
      cache: 'no-store'
    })
    .then(function(resp) {
      return resp.json();
    })
    .then(createTweet);
}

function createTweet(input) {
  var data = input[0];

  var dataElement = document.createElement('div');
  dataElement.innerHTML = data.content;
  var quoteText = dataElement.innerText.trim();
  var quoteAuthor = data.title;
  var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;

  if (!quoteAuthor.length) {
    quoteAuthor = "Unknown author";
  }
  if (tweetText.length > 140) {
    getQuote();
  } else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    document.querySelector('.quote-board__quotes').innerText = quoteText;
    document.querySelector('.quote-board__author').innerText = "Author: " + quoteAuthor;
    document.querySelector('.quote-board__tweet').setAttribute('href', tweet); // link nadaje display:none ?????
  }
}

document.addEventListener('DOMContentLoaded', function() {
  getQuote();
  document.querySelector('.quote-board__btn').addEventListener('click', function() {
    getQuote();
  });
});
