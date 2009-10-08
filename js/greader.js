
function gReaderSeed(data) {
  var html = [];
  html.push('<ul>');
  var is = data.items;
  for (var i = 0, j = is.length; i < j; i++) {
    html.push('<li>');
    var pd = new Date(is[i].published * 1000);
    html.push('<a class="item-title" href="' + is[i].alternate.href + '">' + is[i].title + '</a><br /><span class="item-details">by ' + is[i].author + ' via <a href="' + is[i].origin.htmlUrl + '">' + is[i].origin.title + '</a> (' + pd.getDay() + '/' + pd.getMonth() + '/' + pd.getFullYear() + ')</span>');
    html.push('</li>');
  }
  html.push('</ul>');
  $('div#reading-shared-items').html(html.join(''));
}

function gReaderInit(numItems, userId) {
  var url = 'http://www.google.com/reader/public/javascript/user/' + userId + '/state/com.google/broadcast?n=' + numItems + '&callback=?';
  $.getJSON(url, gReaderSeed);
}
