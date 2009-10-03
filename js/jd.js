
function tick() {
  var age = (new Date().getTime() - new Date().setTime(453900600000)) / 31536000000;
  document.getElementById("age").innerHTML = age.toFixed(8);
}

function loadTweeting() {
  $('img#tweeting-loading').show();
  $('div#tweets').hide();
  getTwitters('tweets', { 
    id: 'jdennes', count: 6, enableLinks: true, ignoreReplies: true, clearContents: true,
    template: '"%text%" <a class="when" href="http://twitter.com/%user_screen_name%/statuses/%id%/">%time%</a>'
  });
  $('div#tweets').show();
  $('img#tweeting-loading').hide();
}

function loadListening() {
  $('img#listening-loading').show();
  $('div#lastfm').hide();
  $('div#lastfm').html('<dl><dt class="lfm_art"><a href="#"></a></dt><dd class="lfm_song"></dd><dd class="lfm_artist"></dd><dd class="lfm_album"></dd></dl>');
  $('div#lastfm').lastFM({
    username: 'jdennes', apikey: '3ab5290b3f5973475ef258a41323fdad', number: 8, 
    artSize: 'small', noart: 'http://cdn.last.fm/flatness/catalogue/noimage/2/default_artist_small.png',
    onComplete: function(){}
  });
  $('div#lastfm').show();
  $('img#listening-loading').hide();
}

$(document).ready(function(){
  setInterval('tick()', 1000);
  loadTweeting();
  loadListening();
});
