from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
titles = selector.css(".product_pod h3 a::attr(title)").getall()
prices = selector.css(".product_price .price_color::text").getall()
print(prices)