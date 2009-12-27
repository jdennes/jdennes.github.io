
# Concatenate all javascript files then minify using YUI Compressor

cat prettydate.js flickr.js twitter.js lastfm.js greader.js github.js jd.js > jd.concat.js

java -jar yuicompressor-2.4.2.jar jd.concat.js -o jd.min.js --nomunge --charset utf-8
