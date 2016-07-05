require 'rubygems'
require 'nokogiri'
require 'open-uri'
FLITESUIT_URL = "http://www.flitesuit.com"
page = Nokogiri::HTML(open(FLITESUIT_URL ))
puts page.class   # => Nokogiri::HTML::Document

print(page)

open('flitesuit.html', 'w') { |f|
  f.puts page
}
