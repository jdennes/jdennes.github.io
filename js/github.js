
function githubActivitySeed(data) {
  var html = [];
  html.push('<ul>');
  var is = data.value.items;
  for (var i = 0; i < 6; i++) {
    html.push('<li>');
    html.push('<a href="' + is[i].link + '">' + prettyDate(is[i]["y:published"].utime) + ' ' + is[i].title + '</a><div class="item-details">' +is[i].content.content + '</div>');
    html.push('</li>');
  }
  html.push('</ul>');
  $('div#github-activity').html(html.join(''));
}

function loadGithubActivity() {
  var activity_url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=a6bc41631b551cf342113be8c733a329&_render=json&_callback=?';
  $.getJSON(activity_url, githubActivitySeed);
}
