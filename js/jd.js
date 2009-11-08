
function tick() {
  var age = (new Date().getTime() - new Date().setTime(453900600000)) / 31536000000;
  $('span#age').html(age.toFixed(8));
}

function loadTweeting() {
  $('img#tweeting-loading').show();
  $('div#tweets').hide();
  getTwitters('tweets', { 
    id: 'jdennes', count: 6, enableLinks: true, ignoreReplies: true, clearContents: true,
    template: '"%text%" <a class="when" href="http://twitter.com/%user_screen_name%/statuses/%id%/"><br />%time%</a>'
  });
  $('div#tweets').show();
  $('img#tweeting-loading').hide();
}

function loadListening() {
  $('img#listening-loading').show();
  $('div#lastfm').hide();
  $('div#lastfm').html('<dl><dt class="lfm_art"><a href="#"></a></dt><dd class="lfm_song"></dd><dd class="lfm_artist"></dd><dd class="lfm_time"></dd></dl>');
  $('div#lastfm').lastFM({
    username: 'jdennes', apikey: '3ab5290b3f5973475ef258a41323fdad', number: 8, 
    artSize: 'small', noart: 'http://cdn.last.fm/flatness/catalogue/noimage/2/default_artist_small.png',
    onComplete: function(){}
  });
  $('div#lastfm').show();
  $('img#listening-loading').hide();
}

function loadReading() {
  $('img#reading-loading').show();
  $('div#reading-shared-items').hide();
  gReaderInit(6, '10795563111833728553');
  $('div#reading-shared-items').show();
  $('img#reading-loading').hide();
}

function loadCoding() {
  $('img#coding-loading').show();
  $('div#github-activity').hide();
  loadGithubActivity();
  $('div#github-activity').show();
  $('img#coding-loading').hide();
}

$(document).ready(function(){
  setInterval('tick()', 1000);
  loadTweeting();
  loadListening();
  loadReading();
  loadCoding();
});
