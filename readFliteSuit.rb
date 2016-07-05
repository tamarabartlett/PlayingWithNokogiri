require 'rubygems'
require 'nokogiri'
require 'open-uri'
FLITESUIT_URL = "http://www.flitesuit.com/contact.html"
page = Nokogiri::HTML(open(FLITESUIT_URL ))
puts page.class   # => Nokogiri::HTML::Document

open('flitesuit-contact.html', 'w') { |f|
  f.puts page
}
