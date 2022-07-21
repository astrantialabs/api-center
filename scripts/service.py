import re
import requests


class Service:
    def getFunFact():
        response = requests.get("https://cinnabar.icaksh.my.id/api/public/daily/wiki")

        funfact = [
            {"id": index + 1, "fact": fact["tahukahAnda"]}
            for index, fact in enumerate(response.json()["data"])
        ]

        return funfact

    def getRecipe():
        response = requests.get("https://masak-apa.tomorisakura.vercel.app/api/recipes")

        recipe = [
            {
                "id": index + 1,
                "title": recipe["title"],
                "image": recipe["thumb"],
                "time": recipe["times"],
                "difficulty": recipe["dificulty"],
            }
            for index, recipe in enumerate(response.json()["results"])
        ]

        return recipe
