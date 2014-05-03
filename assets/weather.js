(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $(function() {
    return load_weather();
  });

  this.get_icon = function(code) {
    if (code === 0 || code === 1 || code === 2 || code === 3 || code === 4 || code === 37 || code === 38 || code === 39 || code === 45 || code === 47) {
      return '&#xe01a;';
    }
    if (code === 5 || code === 6 || code === 7 || code === 8 || code === 9 || code === 10 || code === 11 || code === 12 || code === 18 || code === 40) {
      return '&#xe011;';
    }
    if (code === 13 || code === 14 || code === 15 || code === 16 || code === 41 || code === 42 || code === 43 || code === 46) {
      return '&#xe016;';
    }
    if (code === 17 || code === 35) {
      return '&#xe017;';
    }
    if (__indexOf.call([19, 20, 21, 22], code) >= 0) {
      return '&#xe009;';
    }
    if (code === 23 || code === 24) {
      return '&#xe005;';
    }
    if (code === 25 || code === 26 || code === 44) {
      return '&#xe018;';
    }
    if (code === 27 || code === 29) {
      return '&#xe008;';
    }
    if (code === 28 || code === 30) {
      return '&#xe007;';
    }
    if (code === 31 || code === 33) {
      return '&#xe002;';
    }
    if (code === 32 || code === 34 || code === 36) {
      return '&#xe000;';
    }
    return '';
  };

  this.weather_callback = function(data) {
    var code, icon, temp, text;
    if ((data.query.results.channel.item.condition.text != null) && (data.query.results.channel.item.condition.code != null)) {
      text = data.query.results.channel.item.condition.text;
      temp = data.query.results.channel.item.condition.temp;
      code = data.query.results.channel.item.condition.code;
      icon = get_icon(parseInt(code, 10));
      if (icon !== '') {
        return $('span.weather-icon a').html(icon).attr("title", "" + text + " and " + temp + " degrees C in Berlin now.");
      }
    }
  };

  this.load_weather = function() {
    var callback, url;
    callback = 'weather_callback';
    url = "http://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20638242%20and%20u%20%3D%20'c'&format=json&callback=" + callback;
    $('span.weather-icon a').html('&nbsp;&nbsp;&nbsp;');
    return $.ajax({
      url: url,
      dataType: 'jsonp'
    });
  };

}).call(this);
