
(function($){
  $.fn.lastFM = function(options) {
    
    var defaults = {
      number: 8,
      username: 'jdennes',
      apikey: '3ab5290b3f5973475ef258a41323fdad',
      artSize: 'small',
      noart: 'http://cdn.last.fm/flatness/catalogue/noimage/2/default_artist_small.png',
      onComplete: function(){}
    },
    settings = $.extend({}, defaults, options);

    var lastUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+settings.username+'&api_key='+settings.apikey+'&limit='+settings.number+'&format=json&callback=?';
    var $this = $(this);
    
    var container = $this.html();
    
    $this.children(':first').remove();
    
    if(settings.artSize == 'small'){imgSize = 0}
    if(settings.artSize == 'medium'){imgSize = 1}
    if(settings.artSize == 'large'){imgSize = 2}

    this.each(function() {
      
      $.getJSON(lastUrl, function(data){ 
        $.each(data.recenttracks.track, function(i, item){

          if(item.image[1]['#text'] == ''){
            art = settings.noart;
          }else{
            art = stripslashes(item.image[imgSize]['#text']);
          }

          url = stripslashes(item.url);
          song = item.name;
          artist = item.artist['#text'];
          album = item.album['#text'];
          time = '';
          if (item.date) {
            time = item.date['uts'];
          }
          now_playing = '';
          if (item.hasOwnProperty('@attr')) {
            now_playing = item['@attr']['nowplaying'];
          }

          $this.append(container);

          var $current = $this.children(':eq('+i+')');

          when = prettyDate(time);
          $current.find('[class=lfm_song]').append(song);
          $current.find('[class=lfm_artist]').append(artist);
          $current.find('[class=lfm_art]').append("<img src='"+art+"' alt='Artwork for " + album + "'/>");
          $current.find('[class=lfm_time]').append((now_playing == "true" ? '<img width="12" height="12" src="http://cdn.last.fm/flatness/global/icon_eq.gif" alt="Now playing" /> ' : '') + (when == undefined && now_playing == "true" ? "Now playing" : when));
          $current.find('a').attr('href', url).attr('title', song + ' on Last.fm').attr('target', '_blank');
          
          // callback
          if(i==(settings.number-1)){
            settings.onComplete.call(this);
          }
          
        });
      });
    });
  };
  
  //Clean up the URL's
  function stripslashes( str ) {   
    return (str+'').replace(/\0/g, '0').replace(/\\([\\'"])/g, '$1');
  }
})(jQuery);
