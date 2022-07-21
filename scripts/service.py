import random
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

    def getQuake():
        response = requests.get("https://cuaca-gempa-rest-api.vercel.app/quake").json()[
            "data"
        ]

        quake = [
            {
                "id": 1,
                "date": response["tanggal"],
                "time": response["jam"],
                "coordinate": response["coordinates"],
                "latitude": response["lintang"],
                "longtitude": response["bujur"],
                "magnitude": response["magnitude"],
                "depth": response["kedalaman"],
                "region": response["wilayah"],
                "shakemap": response["shakemap"],
            }
        ]

        return quake

    def getRandomCoinFlip():
        return {
            "id": 1,
            "category": "Coin Flip",
            "result": random.choice(["Head", "Tail"]),
        }

    def getRandomDice():
        return {
            "id": 1,
            "category": "Dice",
            "result": random.randint(1, 6),
        }
