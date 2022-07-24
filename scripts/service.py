import random
import requests

from dependency import Dependency
from utility import Utility


class Service:
    def getFunFact():
        response = requests.get("https://cinnabar.icaksh.my.id/api/public/daily/wiki")

        funfact = []
        for index, fact in enumerate(response.json()["data"]):
            splittedFact = fact["tahukahAnda"].split()

            splittedFact[-1] = splittedFact[-1].replace('"', "")

            joinedFact = "Tahukah anda " + " ".join(splittedFact[1:])

            funfact.append({"id": index + 1, "fact": joinedFact})

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

    def getEarthquake():
        response = requests.get("https://cuaca-gempa-rest-api.vercel.app/quake").json()[
            "data"
        ]

        earthquake = {
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

        return earthquake

    def getName():
        return [
            {"id": index + 1, "name": name}
            for index, name in enumerate(Dependency.listOfNames)
        ]

    def getBirthPlace():
        return [
            {"id": index + 1, "birthPlace": birthPlace}
            for index, birthPlace in enumerate(Dependency.listOfBirthPlace)
        ]

    def getReligion():
        return [
            {"id": index + 1, "religion": religion}
            for index, religion in enumerate(Dependency.listOfReligion)
        ]

    def getSMKMajor():
        return [
            {"id": index + 1, "major": major}
            for index, major in enumerate(Dependency.listOfSMKMajor)
        ]

    def getSMAMajor():
        return [
            {"id": index + 1, "major": major}
            for index, major in enumerate(Dependency.listOfSMAMajor)
        ]

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

    def getRandomStudentSMK(amount):
        randomStudentList = []
        randomStudentNameList = random.choices(Dependency.listOfNames, k=amount)
        for studentIndex, studentName in enumerate(randomStudentNameList):
            birthDate = Utility.randomBirthDate("01-01-2004", "31-12-2006")

            newRandomStudentObject = {
                "id": studentIndex + 1,
                "nis": str(studentIndex + 1).zfill(8),
                "name": studentName,
                "age": Utility.convertDateToAge(birthDate),
                "birthPlace": Utility.randomBirthPlace(),
                "birthDate": birthDate,
                "gender": Utility.randomGender(),
                "grade": Utility.randomGrade(),
                "major": Utility.randomSMKMajor(),
            }

            randomStudentList.append(newRandomStudentObject)

        return randomStudentList

    def getRandomStudentSMA(amount):
        randomStudentList = []
        randomStudentNameList = random.choices(Dependency.listOfNames, k=amount)
        for studentIndex, studentName in enumerate(randomStudentNameList):
            birthDate = Utility.randomBirthDate("01-01-2004", "31-12-2006")

            newRandomStudentObject = {
                "id": studentIndex + 1,
                "nis": str(studentIndex + 1).zfill(8),
                "name": studentName,
                "age": Utility.convertDateToAge(birthDate),
                "birthPlace": Utility.randomBirthPlace(),
                "birthDate": birthDate,
                "gender": Utility.randomGender(),
                "grade": Utility.randomGrade(),
                "major": Utility.randomSMAMajor(),
            }

            randomStudentList.append(newRandomStudentObject)

        return randomStudentList
