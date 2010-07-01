#!/usr/bin/env python
import sys, os
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util, template

class MainHandler(webapp.RequestHandler):
  def get(self):
    path = os.path.join(os.path.dirname(__file__), 'index.html')
    self.response.out.write(template.render(path, {}))

def main():
  app = webapp.WSGIApplication([('/', MainHandler),], debug=True)
  util.run_wsgi_app(app)

if __name__ == '__main__':
  main()
