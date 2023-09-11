from urllib.request import urlopen
import requests

from bs4 import BeautifulSoup
'''
request = requests.get("https://randomwordgenerator.com/sentence.php")
soup = BeautifulSoup(request.content, "html.parser")
print(soup.prettify())


request2 = requests.get("https://blog.hubspot.com/sales/famous-quotes")
soup2 = BeautifulSoup(request2.content, "html.parser")
print(soup2.prettify())
'''

html = urlopen("https://blog.hubspot.com/sales/famous-quotes")
soup = BeautifulSoup(html, "html.parser")
type(soup)
print(soup.text)