from parsel import Selector
import requests

def orgencoding(url):
    response = requests.get(url)
    selector = Selector(text=response.text)
    titles = selector.css("body").get()
    print(titles)


orgencoding("https://httpbin.org/encoding/utf8")