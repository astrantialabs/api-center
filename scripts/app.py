from fastapi import FastAPI

from service import Service


app = FastAPI()


@app.get("/api/funfact")
def getFunFact():
    return Service.getFunFact()


@app.get("/api/recipe")
def getRecipe():
    return Service.getRecipe()


@app.get("/api/quake")
def getQuake():
    return Service.getQuake()
