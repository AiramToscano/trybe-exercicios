from parsel import Selector
import requests

def gitusers(url):
    response = requests.get(url)
    users = response.json()
    for user in users:
        print(f"{user['login']} {user['url']}")


gitusers("https://api.github.com/users")