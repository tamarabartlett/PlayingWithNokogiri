require 'rubygems'
require 'nokogiri'
require 'open-uri'

page = Nokogiri::HTML(open("http://www.flitesuit.com"))
puts page.class   # => Nokogiri::HTML::Document

