(function($){
  $.fn.flickr = function(options) {
    var defaults = {
      number: 10,
      id: '99761031@N00',
      lang: 'en-us',
      onComplete: function(){}
    },
    settings = $.extend({}, defaults, options);
    var url = 'http://api.flickr.com/services/feeds/photos_public.gne?id=' + settings.id + '&lang=' + settings.lang + '&format=json&jsoncallback=?'
    var $this = $(this);
    var container = $this.html();
    $this.children(':first').remove();

    this.each(function() {
      $('#snapping').empty();
      var i = 0;
      $.getJSON(url, function(data) {
        $.each(data.items, function(i,item) {
          if (i < settings.number) {
            $('<img/>').attr({ src: item.media.m.replace('_m.jpg', '_s.jpg'), alt: item.title, width: '50', height: '50'}).appendTo("#snapping")
              .wrap("<a href=\"" + item.link + "\" title=\"" +item.title  + "\" target=\"_blank\"></a>");
          }
          i++;
        });
      });
    });
  };
})(jQuery);