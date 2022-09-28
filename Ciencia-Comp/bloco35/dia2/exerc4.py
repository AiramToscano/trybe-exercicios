from parsel import Selector
import requests

def booksAll(url):
    response = requests.get(url)
    selector = Selector(text=response.text)
    titles = selector.css(".col-sm-6.product_main h1::text").get()
    price = selector.css(".price_color::text").re(r"\d+\.\d{2}")
    description = selector.css(".product_page p::text").getall()
    urlImage = selector.css(".item.active img::attr(src)").get()
    inStockPrice = description[2].split()[2].split("(")[1]
    print(titles, price[0], description[10], urlImage, inStockPrice, sep= ", ")


booksAll("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")