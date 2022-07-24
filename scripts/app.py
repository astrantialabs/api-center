from fastapi import FastAPI

from service import Service


app = FastAPI()


@app.get("/api/funfact")
def getFunFact():
    return Service.getFunFact()


@app.get("/api/recipe")
def getRecipe():
    return Service.getRecipe()


@app.get("/api/earthquake")
def getEarthquake():
    return Service.getEarthquake()


@app.get("/api/name")
def getName():
    return Service.getName()


@app.get("/api/birth-place")
def getBirthPlace():
    return Service.getBirthPlace()


@app.get("/api/religion")
def getReligion():
    return Service.getReligion()


@app.get("/api/smk-major")
def getSMKMajor():
    return Service.getSMKMajor()


@app.get("/api/sma-major")
def getSMAMajor():
    return Service.getSMAMajor()


@app.get("/api/random/coinflip")
def getRandomCoinFlip():
    return Service.getRandomCoinFlip()


@app.get("/api/random/dice")
def getRandomDice():
    return Service.getRandomDice()


@app.get("/api/random/student/smk")
def getRandomStudentSMK():
    return Service.getRandomStudentSMK(100)


@app.get("/api/random/student/smk/{amount}")
def getRandomStudentSMKByAmount(amount):
    amount = int(amount)

    if amount > 10000:
        return "Amount Needs To Be Less Than Or Equal To 10000"
    elif amount <= 10000:
        return Service.getRandomStudentSMK(amount)


@app.get("/api/random/student/sma")
def getRandomStudentSMA():
    return Service.getRandomStudentSMA(100)


@app.get("/api/random/student/sma/{amount}")
def getRandomStudentSMAByAmount(amount):
    amount = int(amount)

    if amount > 10000:
        return "Amount Needs To Be Less Than Or Equal To 10000"
    elif amount <= 10000:
        return Service.getRandomStudentSMA(amount)
