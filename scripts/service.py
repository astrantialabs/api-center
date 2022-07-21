import re
import requests


class Service:
    def getFunFact():
        response = requests.get("https://cinnabar.icaksh.my.id/api/public/daily/wiki")

        funfact = [(x["tahukahAnda"]) for x in response.json()["data"]]

        return funfact
